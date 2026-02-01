import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, X, RotateCcw } from 'lucide-react';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';

interface GameAircraft {
  id: string;
  name: string;
  image: string;
  manufacturer: string;
}

const MultipleChoice: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameAircraft, setGameAircraft] = useState<GameAircraft[]>([]);
  const [options, setOptions] = useState<GameAircraft[]>([]);
  const [gameOver, setGameOver] = useState(false);

  // Initialize game with shuffled aircraft
  useEffect(() => {
    if (gameAircraft.length === 0) {
      const shuffled = [...AIRCRAFT_DATA].sort(() => Math.random() - 0.5);
      setGameAircraft(shuffled);
    }
  }, []);

  // Generate multiple choice options
  useEffect(() => {
    if (gameAircraft.length > 0 && currentIndex < gameAircraft.length) {
      const correctAircraft = gameAircraft[currentIndex];
      const otherAircraft = gameAircraft
        .filter((_, idx) => idx !== currentIndex)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const shuffledOptions = [correctAircraft, ...otherAircraft]
        .sort(() => Math.random() - 0.5);
      setOptions(shuffledOptions);
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex, gameAircraft]);

  const handleSelectOption = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);

    const correct = options[index].id === gameAircraft[currentIndex].id;
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
    if (currentIndex >= gameAircraft.length - 1) {
      setGameOver(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTotalAttempts(0);
    setSelectedOption(null);
    setShowResult(false);
    setGameOver(false);
    const shuffled = [...AIRCRAFT_DATA].sort(() => Math.random() - 0.5);
    setGameAircraft(shuffled);
  };

  if (gameAircraft.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 mx-auto bg-green-400 rounded-full mb-4" />
          <p className="text-slate-600">Préparation du jeu...</p>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const accuracy = totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0;
    let message = '';
    let emoji = '';

    if (accuracy === 100) {
      message = 'Parfait ! Tu es un maître du multiple choice ! 🏆';
      emoji = '🏆';
    } else if (accuracy >= 80) {
      message = 'Excellent ! Très bon choix ! ✈️';
      emoji = '✈️';
    } else if (accuracy >= 60) {
      message = 'Bien joué ! Continue ! 📈';
      emoji = '📈';
    } else {
      message = 'Continue ta progression ! 🎓';
      emoji = '🎓';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-blue-50 p-4">
        <button
          onClick={() => navigate('/quiz')}
          className="flex items-center space-x-2 mb-8 text-slate-700 hover:text-green-600 transition-colors font-semibold"
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
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-green-600">{score}</div>
                <div className="text-sm text-green-700 font-semibold mt-2">Correct</div>
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
              <p className="text-slate-600"><span className="font-bold text-slate-900">{totalAttempts}</span> questions</p>
              <p className="text-slate-600"><span className="font-bold text-slate-900">{totalAttempts - score}</span> erreurs</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleRestart}
              className="flex-1 bg-green-400 hover:bg-green-500 text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center space-x-2"
            >
              <RotateCcw size={20} />
              <span>Rejouer</span>
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
  const progress = ((currentIndex + 1) / gameAircraft.length) * 100;
  const correctOptionIndex = options.findIndex((opt) => opt.id === aircraft.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-blue-50 p-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/quiz')}
            className="flex items-center space-x-2 text-slate-700 hover:text-green-600 transition-colors font-semibold"
          >
            <ChevronLeft size={20} />
            <span>Menu</span>
          </button>
          <div className="text-center">
            <div className="text-3xl font-black text-green-600">{score}</div>
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
            className="bg-gradient-to-r from-green-400 to-green-500 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">{currentIndex + 1} / {gameAircraft.length}</p>
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
            <h2 className="text-xl font-bold text-slate-700 mb-6">Quel est cet avion ?</h2>

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
                        : 'bg-green-100 border-2 border-green-500 text-green-900'
                      : showResult && index === correctOptionIndex
                      ? 'bg-green-100 border-2 border-green-500 text-green-900'
                      : 'bg-slate-100 border-2 border-slate-200 text-slate-900 hover:border-green-400 disabled:cursor-not-allowed'
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
                className={`rounded-2xl p-6 mb-6 border-2 ${
                  isCorrect
                    ? 'bg-green-50 border-green-400'
                    : 'bg-red-50 border-red-400'
                }`}
              >
                <p
                  className={`font-bold text-lg ${
                    isCorrect ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {isCorrect ? '✅ Correct !' : '❌ Oups !'}
                </p>
              </div>
            )}

            {/* Next Button */}
            {showResult && (
              <button
                onClick={handleNext}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-2xl transition-all active:scale-95"
              >
                {currentIndex >= gameAircraft.length - 1 ? 'Voir les résultats' : 'Suivant'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;
