import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, X, RotateCcw } from 'lucide-react';
import { useAircraftData } from '../context/AircraftDataContext.tsx';

interface GameAircraft {
  id: string;
  name: string;
  image: string;
  manufacturer: string;
  category: string;
  enginesCount: number;
  enginesType: string;
  maxSpeed?: number;
  maxAltitude?: number;
  year?: number;
}

const SpecsChallenge: React.FC = () => {
  const { data: AIRCRAFT_DATA } = useAircraftData();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameAircraft, setGameAircraft] = useState<GameAircraft[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize game with shuffled aircraft
  useEffect(() => {
    if (gameAircraft.length === 0) {
      const shuffled = (AIRCRAFT_DATA as unknown as GameAircraft[]).sort(() => Math.random() - 0.5);
      setGameAircraft(shuffled);
    }
  }, []);

  // Auto-focus input field
  useEffect(() => {
    if (inputRef.current && !gameOver) {
      inputRef.current.focus();
    }
  }, [currentIndex, gameOver]);

  const handleSubmitGuess = () => {
    if (gameAircraft.length === 0 || !userGuess.trim()) return;

    const aircraft = gameAircraft[currentIndex];
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
    if (currentIndex >= gameAircraft.length - 1) {
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
    const shuffled = (AIRCRAFT_DATA as unknown as GameAircraft[]).sort(() => Math.random() - 0.5);
    setGameAircraft(shuffled);
  };

  if (gameAircraft.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 mx-auto bg-purple-400 rounded-full mb-4" />
          <p className="text-slate-600">Chargement du jeu...</p>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const accuracy = totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0;
    let message = '';
    let emoji = '';

    if (accuracy === 100) {
      message = 'Parfait ! Tu maîtrises les specs ! 🧠';
      emoji = '🧠';
    } else if (accuracy >= 80) {
      message = 'Excellent ! Très bon œuvre ! 🎯';
      emoji = '🎯';
    } else if (accuracy >= 60) {
      message = 'Bien joué ! Continue ! 📈';
      emoji = '📈';
    } else {
      message = 'Continuons à apprendre ! 🎓';
      emoji = '🎓';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50 p-4">
        <button
          onClick={() => navigate('/quiz')}
          className="flex items-center space-x-2 mb-8 text-slate-700 hover:text-purple-600 transition-colors font-semibold"
        >
          <ChevronLeft size={20} />
          <span>Menu</span>
        </button>

        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-6">{emoji}</div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Quiz Terminé!</h1>
          <p className="text-xl text-slate-600 mb-8">{message}</p>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-purple-600">{score}</div>
                <div className="text-sm text-purple-700 font-semibold mt-2">Bonnes réponses</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-blue-600">{maxStreak}</div>
                <div className="text-sm text-blue-700 font-semibold mt-2">Série max</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6">
                <div className="text-3xl font-black text-pink-600">{accuracy}%</div>
                <div className="text-sm text-pink-700 font-semibold mt-2">Précision</div>
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
              className="flex-1 bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center space-x-2"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50 p-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/quiz')}
            className="flex items-center space-x-2 text-slate-700 hover:text-purple-600 transition-colors font-semibold"
          >
            <ChevronLeft size={20} />
            <span>Menu</span>
          </button>
          <div className="text-center">
            <div className="text-3xl font-black text-purple-600">{score}</div>
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
            className="bg-gradient-to-r from-purple-400 to-purple-500 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">{currentIndex + 1} / {gameAircraft.length}</p>
      </div>

      {/* Main Quiz Card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Specs Section */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">📊 Devine cet avion avec ces caractéristiques:</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4">
                <p className="text-sm text-slate-600 font-semibold">Catégorie</p>
                <p className="text-xl font-bold text-slate-900">{aircraft.category}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-sm text-slate-600 font-semibold">Moteurs</p>
                  <p className="text-2xl font-black text-purple-600">{aircraft.enginesCount}</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-sm text-slate-600 font-semibold">Type</p>
                  <p className="text-lg font-bold text-slate-900">{aircraft.enginesType}</p>
                </div>
              </div>

              {aircraft.maxSpeed && (
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-sm text-slate-600 font-semibold">Vitesse max</p>
                  <p className="text-lg font-bold text-slate-900">{aircraft.maxSpeed} km/h</p>
                </div>
              )}

              {aircraft.maxAltitude && (
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-sm text-slate-600 font-semibold">Altitude max</p>
                  <p className="text-lg font-bold text-slate-900">{aircraft.maxAltitude.toLocaleString()} m</p>
                </div>
              )}
            </div>
          </div>

          {/* Quiz Section */}
          <div className="p-8">
            <h3 className="text-lg font-bold text-slate-700 mb-6">Quel est le nom de cet avion ?</h3>

            {!showResult ? (
              <div className="space-y-4 mb-6">
                <input
                  ref={inputRef}
                  type="text"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitGuess()}
                  placeholder="Tape le nom de l'avion..."
                  className="w-full px-6 py-4 bg-slate-100 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white text-lg font-semibold transition-all"
                />
                <button
                  onClick={handleSubmitGuess}
                  disabled={!userGuess.trim()}
                  className="w-full bg-purple-400 hover:bg-purple-500 disabled:bg-slate-300 text-slate-900 font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 disabled:cursor-not-allowed"
                >
                  Valider
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
                        {isCorrect ? 'Correct !' : 'Oups !'}
                      </p>
                      {!isCorrect && (
                        <p className="text-slate-700 font-semibold mt-2">
                          C'était : <span className="text-lg text-slate-900">{aircraft.name}</span>
                        </p>
                      )}
                      <p className="text-sm text-slate-600 mt-1">{aircraft.manufacturer}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-2xl transition-all active:scale-95"
                >
                  {currentIndex >= gameAircraft.length - 1 ? 'Voir les résultats' : 'Suivant'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsChallenge;
