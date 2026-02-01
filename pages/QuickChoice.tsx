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

const QuickChoice: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameAircraft, setGameAircraft] = useState<GameAircraft[]>([]);
  const [options, setOptions] = useState<GameAircraft[]>([]);
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

  // Generate multiple choice options
  useEffect(() => {
    if (gameAircraft.length > 0 && currentIndex < gameAircraft.length) {
      const correctAircraft = gameAircraft[currentIndex];
      const otherAircraft = AIRCRAFT_DATA
        .filter((a) => !gameAircraft.includes(a as GameAircraft))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const shuffledOptions = [correctAircraft, ...otherAircraft]
        .sort(() => Math.random() - 0.5);
      setOptions(shuffledOptions);
      setSelectedOption(null);
      setShowResult(false);
      setTimeLeft(15);
      setTimerActive(true);
    }
  }, [currentIndex, gameAircraft]);

  // Timer
  useEffect(() => {
    if (!timerActive || gameOver || gameAircraft.length === 0) return;

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
  }, [timerActive, gameOver, gameAircraft.length]);

  const handleTimeUp = () => {
    if (!showResult) {
      setIsCorrect(false);
      setShowResult(true);
      setTimerActive(false);
    } else {
      handleNext();
    }
  };

  const handleSelectOption = (index: number) => {
    if (showResult) return;

    setSelectedOption(index);
    const correct = options[index].id === gameAircraft[currentIndex].id;
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
      // Scroll to top to show the image
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setGameOver(false);
    setTimeLeft(15);
    setTimerActive(true);
    const shuffled = [...AIRCRAFT_DATA]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalQuestions);
    setGameAircraft(shuffled);
  };

  if (gameAircraft.length === 0 || options.length === 0) {
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
          <h1 className="text-4xl font-black text-slate-900 mb-2">Quick Choice Terminé!</h1>
          
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
  const correctOptionIndex = options.findIndex((opt) => opt.id === aircraft.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50">
      {/* Fixed Header - Below Navbar */}
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50 border-b border-slate-200/50 backdrop-blur-sm p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/quiz')}
              className="flex items-center space-x-2 text-slate-700 hover:text-yellow-600 transition-colors font-semibold"
            >
              <ChevronLeft size={20} />
              <span>Menu</span>
            </button>
            
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-black ${timerColor} ${timeLeft <= 5 ? 'animate-pulse' : ''}`}>{timeLeft}s</div>
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
      </div>

      {/* Main Content - Add top padding to account for navbar + fixed header */}
      <div className="p-4 pt-32 sm:pt-40">
        {/* Main Quiz Card */}
        <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Image Section - Full Width */}
          <div className="w-full h-96 sm:h-[500px] flex items-center justify-center relative overflow-hidden bg-sky-200">
            <img
              src={aircraft.image}
              alt="Quiz aircraft"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quiz Section */}
          <div className="p-8">
            <h2 className="text-lg font-bold text-slate-700 mb-6">⚡ Quel est cet avion?</h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {options.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-2xl font-semibold text-left transition-all ${
                    selectedOption === index
                      ? showResult
                        ? index === correctOptionIndex
                          ? 'bg-green-100 border-2 border-green-500 text-green-900'
                          : 'bg-red-100 border-2 border-red-500 text-red-900'
                        : 'bg-yellow-100 border-2 border-yellow-500 text-yellow-900'
                      : showResult && index === correctOptionIndex
                      ? 'bg-green-100 border-2 border-green-500 text-green-900'
                      : 'bg-slate-100 border-2 border-slate-200 text-slate-900 hover:border-yellow-400 hover:bg-yellow-50 disabled:cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{option.name}</p>
                      <p className="text-sm opacity-75">{option.manufacturer}</p>
                    </div>
                    {showResult && index === correctOptionIndex && (
                      <Check size={24} className="text-green-600" />
                    )}
                    {showResult && selectedOption === index && index !== correctOptionIndex && (
                      <X size={24} className="text-red-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Result Message */}
            {showResult && (
              <div
                className={`rounded-2xl p-6 mb-6 border-2 flex items-center space-x-3 ${
                  isCorrect
                    ? 'bg-green-50 border-green-400'
                    : 'bg-red-50 border-red-400'
                }`}
              >
                {isCorrect ? (
                  <>
                    <Check size={24} className="text-green-600 flex-shrink-0" />
                    <p className="font-bold text-lg text-green-700">Correct !</p>
                  </>
                ) : (
                  <>
                    <X size={24} className="text-red-600 flex-shrink-0" />
                    <p className="font-bold text-lg text-red-700">Oups</p>
                  </>
                )}
              </div>
            )}

            {/* Next Button */}
            {showResult && (
              <button
                onClick={handleNext}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-2xl transition-all active:scale-95"
              >
                {currentIndex >= totalQuestions - 1 ? 'Résultats' : 'Suivant'}
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default QuickChoice;
