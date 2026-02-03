import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, BarChart3 } from 'lucide-react';
import { loadGameProgress } from '../utils/gameProgressService';
import { GameProgress } from '../utils/gameProgressService';

const GameHistory: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<GameProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await loadGameProgress();
      setProgress(data);
      setLoading(false);
    };
    loadHistory();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 mx-auto bg-blue-400 rounded-full mb-4" />
          <p className="text-slate-600">Chargement de l'historique...</p>
        </div>
      </div>
    );
  }

  const quickChoiceGame = progress?.quickChoice;
  const scores = quickChoiceGame?.scores || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/quiz')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft size={20} />
            Retour
          </button>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BarChart3 size={32} className="text-yellow-400" />
            Historique Quick Choice
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        {quickChoiceGame && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="text-sm text-slate-400 mb-2">Meilleur Score</div>
              <div className="text-4xl font-bold text-yellow-400">{quickChoiceGame.bestScore}</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="text-sm text-slate-400 mb-2">Jeux Joués</div>
              <div className="text-4xl font-bold text-blue-400">{quickChoiceGame.totalGames}</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="text-sm text-slate-400 mb-2">Dernier Jeu</div>
              <div className="text-lg font-semibold">
                {quickChoiceGame.lastPlayed > 0
                  ? new Date(quickChoiceGame.lastPlayed).toLocaleDateString('fr-FR')
                  : 'Jamais'}
              </div>
            </div>
          </div>
        )}

        {/* Game History List */}
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
            <h3 className="text-lg font-semibold">Historique ({scores.length} jeux)</h3>
          </div>

          {scores.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-slate-400 text-lg">Aucun jeu joué pour le moment</p>
              <button
                onClick={() => navigate('/quiz/quick-choice')}
                className="mt-6 px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Jouer maintenant
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-700">
              {[...scores].reverse().map((score, index) => {
                const date = new Date(score.timestamp);
                const dateStr = date.toLocaleDateString('fr-FR');
                const timeStr = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
                
                return (
                  <div key={index} className="px-6 py-4 hover:bg-slate-700/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="text-lg font-semibold text-yellow-400">
                          {score.score}/{score.totalQuestions}
                        </div>
                        <div className="text-sm text-slate-400">
                          {dateStr} à {timeStr}
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{score.accuracy}%</div>
                          <div className="text-xs text-slate-400">Précision</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-300">{score.totalQuestions} questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Statistics */}
        {quickChoiceGame && scores.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-slate-400 mb-3">Score Moyen</h3>
              <div className="text-3xl font-bold text-blue-400">
                {Math.round(
                  scores.reduce((sum, s) => sum + s.score, 0) / scores.length
                )}
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-slate-400 mb-3">Précision Moyenne</h3>
              <div className="text-3xl font-bold text-green-400">
                {Math.round(
                  scores.reduce((sum, s) => sum + s.accuracy, 0) / scores.length
                )}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameHistory;
