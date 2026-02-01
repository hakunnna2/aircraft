import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, X, RotateCcw, Zap } from 'lucide-react';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';

interface GameAircraft {
  id: string;
  name: string;
  image: string;
  manufacturer: string;
}

const QuickFire: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10);
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameAircraft, setGameAircraft] = useState<GameAircraft[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timerActive, setTimerActive] = useState(true);

  // Initialize game with 10 random aircraft
  useEffect(() => {
    if (gameAircraft.length === 0) {
      const shuffled = [...AIRCRAFT_DATA]
        .sort(() => Math.random() - 0.5)
        .slice(0, totalQuestions);
      setGameAircraft(shuffled);
    }
  }, []);

  // Timer
  useEffect(() => {
    if (!timerActive || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerActive, gameOver]);

  const handleTimeUp = () => {
    if (gameAircraft.length === 0) return;
    
    if (!showResult) {
      setIsCorrect(false);
      setShowResult(true);
    } else {
      handleNext();
    }
  };

  const handleSubmitGuess = () => {
    if (gameAircraft.length === 0 || !userGuess.trim() || showResult) return;

    const aircraft = gameAircraft[currentIndex];
    const correct = userGuess.toLowerCase().trim() === aircraft.name.toLowerCase().trim() ||
                   userGuess.toLowerCase().includes(aircraft.name.toLowerCase()) ||
                   aircraft.name.toLowerCase().includes(userGuess.toLowerCase());

    setIsCorrect(correct);
    setShowResult(true);
    setTimerActive(false);

    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex >= totalQuestions - 1) {
      setGameOver(true);
      setTimerActive(false);
    } else {
      setCurrentIndex(currentIndex + 1);
      setUserGuess('');
      setShowResult(false);
      setTimeLeft(15);
      setTimerActive(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setUserGuess('');
    setShowResult(false);
    setGameOver(false);
    setTimeLeft(15);
    setTimerActive(true);
    const shuffled = [...AIRCRAFT_DATA]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalQuestions);
    setGameAircraft(shuffled);
  };

  if (gameAircraft.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full mb-4" />
          <p className="text-slate-600">Préparation du jeu rapide...</p>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const accuracy = Math.round((score / totalQuestions) * 100);
    let message = '';
    let emoji = '';

    if (score === 10) {
      message = 'PARFAIT ! Tu es un CHAMPION ! 🏆';
      emoji = '🏆';
    } else if (score >= 8) {
      message = 'EXCELLENT ! Quasi parfait ! ⚡';
      emoji = '⚡';
    } else if (score >= 6) {
      message = 'BON SCORE ! Bien joué ! ✈️';
      emoji = '✈️';
    } else if (score >= 4) {
      message = 'C\'est un début ! 📈';
      emoji = '📈';
    } else {
      message = 'Continue ! 🎓';
      emoji = '🎓';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50 p-4">
        <button
          onClick={() => navigate('/quiz')}
          className="flex items-center space-x-2 mb-8 text-slate-700 hover:text-yellow-600 transition-colors font-semibold"
        >
          <ChevronLeft size={20} />
          <span>Menu</span>
        </button>

        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-6">{emoji}</div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">Quick Fire Terminé!</h1>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 mt-8">
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="8"
                    strokeDasharray={`${(score / totalQuestions) * 314} 314`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-4xl font-black text-yellow-600">{score}</p>
                    <p className="text-sm text-slate-600 font-semibold">/ {totalQuestions}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-2xl font-black text-slate-900 mb-4">{accuracy}%</p>
            <p className="text-lg text-slate-600 mb-8">{message}</p>

            <div className="space-y-2 text-left bg-slate-50 rounded-2xl p-6">
              <p className="text-slate-600"><span className="font-bold text-slate-900">{score}</span> bonnes réponses</p>
              <p className="text-slate-600"><span className="font-bold text-slate-900">{totalQuestions - score}</span> mauvaises</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleRestart}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center space-x-2"
            >
              <Zap size={20} />
              <span>Refaire</span>
            </button>
            <button
              onClick={() => navigate('/quiz')}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  const aircraft = gameAircraft[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const timerColor = timeLeft > 10 ? 'text-green-600' : timeLeft > 5 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50 p-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/quiz')}
            className="flex items-center space-x-2 text-slate-700 hover:text-yellow-600 transition-colors font-semibold"
          >
            <ChevronLeft size={20} />
            <span>Menu</span>
          </button>
          
          <div className="text-center">
            <div className={`text-4xl font-black ${timerColor} animate-pulse`}>{timeLeft}s</div>
            <div className="text-xs text-slate-500 font-semibold">Temps restant</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-black text-yellow-600">{score}</div>
            <div className="text-xs text-slate-500 font-semibold">Points</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">{currentIndex + 1} / {totalQuestions}</p>
      </div>

      {/* Main Quiz Card */}
      <div className="max-w-3xl mx-auto">
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
            <h2 className="text-lg font-bold text-slate-700 mb-4">⚡ Nom de cet avion?</h2>

            {!showResult ? (
              <div className="space-y-3 mb-6">
                <input
                  autoFocus
                  type="text"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitGuess()}
                  placeholder="Tape rapidement..."
                  className="w-full px-6 py-4 bg-slate-100 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white text-lg font-semibold transition-all"
                />
                <button
                  onClick={handleSubmitGuess}
                  disabled={!userGuess.trim()}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-slate-300 text-slate-900 font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 disabled:cursor-not-allowed"
                >
                  Envoyer
                </button>
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
                        {isCorrect ? '+1' : 'Oups'}
                      </p>
                      {!isCorrect && (
                        <p className="text-slate-700 font-semibold mt-2">
                          {aircraft.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-2xl transition-all active:scale-95"
                >
                  {currentIndex >= totalQuestions - 1 ? 'Résultats' : 'Suivant'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFire;
