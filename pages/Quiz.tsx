import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, X, RotateCcw, Volume2 } from 'lucide-react';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';

interface QuizAircraft {
  id: string;
  name: string;
  image: string;
  manufacturer: string;
}

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizAircraft, setQuizAircraft] = useState<QuizAircraft[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize quiz with shuffled aircraft
  useEffect(() => {
    if (quizAircraft.length === 0) {
      const shuffled = [...AIRCRAFT_DATA].sort(() => Math.random() - 0.5);
      setQuizAircraft(shuffled);
    }
  }, []);

  // Auto-focus input field
  useEffect(() => {
    if (inputRef.current && !gameOver) {
      inputRef.current.focus();
    }
  }, [currentIndex, gameOver]);

  // Get difficulty-based hint
  const getHint = () => {
    if (quizAircraft.length === 0) return '';
    const aircraft = quizAircraft[currentIndex];
    if (difficulty === 'easy') {
      return aircraft.manufacturer;
    } else if (difficulty === 'medium') {
      const nameLength = aircraft.name.length;
      const revealed = Math.ceil(nameLength * 0.3);
      return aircraft.name.substring(0, revealed) + '•'.repeat(nameLength - revealed);
    } else {
      return `${aircraft.name.length} letters`;
    }
  };

  const handleSubmitGuess = () => {
    if (quizAircraft.length === 0 || !userGuess.trim()) return;

    const aircraft = quizAircraft[currentIndex];
    const correct = userGuess.toLowerCase().trim() === aircraft.name.toLowerCase().trim() ||
                   userGuess.toLowerCase().includes(aircraft.name.toLowerCase()) ||
                   aircraft.name.toLowerCase().includes(userGuess.toLowerCase());

    setIsCorrect(correct);
    setShowResult(true);
    setTotalAttempts(totalAttempts + 1);

    if (correct) {
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak + 1 > maxStreak) {
        setMaxStreak(streak + 1);
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex >= quizAircraft.length - 1) {
      setGameOver(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setUserGuess('');
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTotalAttempts(0);
    setUserGuess('');
    setShowResult(false);
    setGameOver(false);
    setDifficulty('medium');
    const shuffled = [...AIRCRAFT_DATA].sort(() => Math.random() - 0.5);
    setQuizAircraft(shuffled);
  };

  const speakName = () => {
    if ('speechSynthesis' in window && quizAircraft.length > 0) {
      const aircraft = quizAircraft[currentIndex];
      const utterance = new SpeechSynthesisUtterance(aircraft.name);
      utterance.rate = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  if (quizAircraft.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full mb-4" />
          <p className="text-slate-600">Préparation du quiz...</p>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const accuracy = totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0;
    let message = '';
    let emoji = '';

    if (accuracy === 100) {
      message = 'Parfait ! Tu es un expert en avions ! 🏆';
      emoji = '🏆';
    } else if (accuracy >= 80) {
      message = 'Excellent ! Tu connais bien tes avions ! ✈️';
      emoji = '✈️';
    } else if (accuracy >= 60) {
      message = 'Bien joué ! Tu t\'améliores ! 📈';
      emoji = '📈';
    } else {
      message = 'Continuons à apprendre ! 🎓';
      emoji = '🎓';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-blue-50 p-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 mb-8 text-slate-700 hover:text-yellow-600 transition-colors font-semibold"
        >
          <ChevronLeft size={20} />
          <span>Retour</span>
        </button>

        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-6">{emoji}</div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Quiz Terminé!</h1>
          <p className="text-xl text-slate-600 mb-8">{message}</p>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-600">{score}</div>
                <div className="text-sm text-yellow-700 font-semibold mt-2">Bonnes réponses</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-blue-600">{maxStreak}</div>
                <div className="text-sm text-blue-700 font-semibold mt-2">Série max</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-purple-600">{accuracy}%</div>
                <div className="text-sm text-purple-700 font-semibold mt-2">Précision</div>
              </div>
            </div>

            <div className="space-y-2 text-left bg-slate-50 rounded-2xl p-6">
              <p className="text-slate-600"><span className="font-bold text-slate-900">{totalAttempts}</span> tentatives</p>
              <p className="text-slate-600"><span className="font-bold text-slate-900">{totalAttempts - score}</span> erreurs</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleRestart}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center space-x-2"
            >
              <RotateCcw size={20} />
              <span>Rejouer</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95"
            >
              Accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  const aircraft = quizAircraft[currentIndex];
  const progress = ((currentIndex + 1) / quizAircraft.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-yellow-50 p-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-slate-700 hover:text-yellow-600 transition-colors font-semibold"
          >
            <ChevronLeft size={20} />
            <span>Retour</span>
          </button>
          <div className="text-center">
            <div className="text-3xl font-black text-yellow-600">{score}</div>
            <div className="text-xs text-slate-500 font-semibold">Points</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-red-500">{streak}</div>
            <div className="text-xs text-slate-500 font-semibold">Série</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">{currentIndex + 1} / {quizAircraft.length}</p>
      </div>

      {/* Main Quiz Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Image Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 h-80 flex items-center justify-center relative overflow-hidden">
            <img
              src={aircraft.image}
              alt="Quiz aircraft"
              className="max-h-full max-w-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Quiz Section */}
          <div className="p-8">
            <h2 className="text-xl font-bold text-slate-700 mb-6">Quel est cet avion ?</h2>

            {/* Hint Section */}
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-600 mb-2">💡 <span className="font-semibold">Indice:</span></p>
              <p className="text-blue-700 font-mono font-bold text-lg">{getHint()}</p>
            </div>

            {/* Input Section */}
            {!showResult ? (
              <div className="space-y-4 mb-6">
                <input
                  ref={inputRef}
                  type="text"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitGuess()}
                  placeholder="Tape le nom de l'avion..."
                  className="w-full px-6 py-4 bg-slate-100 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white text-lg font-semibold transition-all"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitGuess}
                    disabled={!userGuess.trim()}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 disabled:bg-slate-300 text-slate-900 font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 disabled:cursor-not-allowed"
                  >
                    Valider
                  </button>
                  <button
                    onClick={speakName}
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center"
                    title="Prononcer le nom"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <div
                  className={`rounded-2xl p-6 mb-6 border-2 ${
                    isCorrect
                      ? 'bg-green-50 border-green-400'
                      : 'bg-red-50 border-red-400'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <X size={24} className="text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <p
                        className={`font-bold text-lg ${
                          isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}
                      >
                        {isCorrect ? 'Correct !' : 'Oups !'}
                      </p>
                      {!isCorrect && (
                        <p className="text-slate-700 font-semibold mt-2">
                          C'était : <span className="text-lg text-slate-900">{aircraft.name}</span>
                        </p>
                      )}
                      <p className="text-sm text-slate-600 mt-2">{aircraft.manufacturer}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-2xl transition-all active:scale-95"
                >
                  {currentIndex >= quizAircraft.length - 1 ? 'Voir les résultats' : 'Suivant'}
                </button>
              </div>
            )}

            {/* Difficulty Selector (only before first guess) */}
            {totalAttempts === 0 && !showResult && (
              <div className="border-t pt-6">
                <p className="text-sm font-semibold text-slate-600 mb-3">Difficulté:</p>
                <div className="flex gap-2">
                  {(['easy', 'medium', 'hard'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
                        difficulty === level
                          ? 'bg-yellow-400 text-slate-900'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {level === 'easy' ? 'Facile' : level === 'medium' ? 'Moyen' : 'Difficile'}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
