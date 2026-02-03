import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface GameScore {
  score: number;
  totalQuestions: number;
  accuracy: number;
  timestamp: number;
}

export interface GameProgress {
  quickFire: {
    bestScore: number;
    totalGames: number;
    lastPlayed: number;
    scores: GameScore[];
  };
  quiz: {
    bestScore: number;
    totalGames: number;
    lastPlayed: number;
    scores: GameScore[];
  };
  multipleChoice: {
    bestScore: number;
    totalGames: number;
    lastPlayed: number;
    scores: GameScore[];
  };
  quickChoice: {
    bestScore: number;
    totalGames: number;
    lastPlayed: number;
    scores: GameScore[];
  };
  specsChallenge: {
    bestScore: number;
    totalGames: number;
    lastPlayed: number;
    scores: GameScore[];
  };
}

const COLLECTION_NAME = 'gameProgress';
const USER_ID = 'default-user'; // Single user ID

const getDefaultProgress = (): GameProgress => ({
  quickFire: { bestScore: 0, totalGames: 0, lastPlayed: 0, scores: [] },
  quiz: { bestScore: 0, totalGames: 0, lastPlayed: 0, scores: [] },
  multipleChoice: { bestScore: 0, totalGames: 0, lastPlayed: 0, scores: [] },
  quickChoice: { bestScore: 0, totalGames: 0, lastPlayed: 0, scores: [] },
  specsChallenge: { bestScore: 0, totalGames: 0, lastPlayed: 0, scores: [] },
});

export const loadGameProgress = async (): Promise<GameProgress> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, USER_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('✅ Game progress loaded from Firebase:', docSnap.data());
      return docSnap.data() as GameProgress;
    }
    
    return getDefaultProgress();
  } catch (error) {
    console.error('Error loading game progress:', error);
    return getDefaultProgress();
  }
};

export const saveGameScore = async (
  gameType: keyof GameProgress,
  score: number,
  totalQuestions: number
): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, USER_ID);
    
    const progress = await loadGameProgress();
    const accuracy = Math.round((score / totalQuestions) * 100);
    const newScore: GameScore = {
      score,
      totalQuestions,
      accuracy,
      timestamp: Date.now()
    };
    
    // Update game-specific progress
    progress[gameType] = {
      bestScore: Math.max(progress[gameType].bestScore, score),
      totalGames: progress[gameType].totalGames + 1,
      lastPlayed: Date.now(),
      scores: [...progress[gameType].scores, newScore].slice(-10) // Keep last 10 scores
    };
    
    await setDoc(docRef, progress);
    console.log(`✅ ${gameType} score saved to Firebase:`, { score, totalQuestions, accuracy, bestScore: progress[gameType].bestScore });
  } catch (error) {
    console.error('Error saving game score:', error);
  }
};

export const getGameStats = async (gameType: keyof GameProgress) => {
  const progress = await loadGameProgress();
  return progress[gameType];
};
