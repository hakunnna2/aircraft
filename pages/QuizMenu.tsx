
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Zap, ListChecks, Smile, BarChart3 } from 'lucide-react';

const QuizMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50 p-3 sm:p-4 md:p-6 overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 mb-8 sm:mb-10 md:mb-12 text-slate-700 hover:text-yellow-600 transition-all duration-300 font-semibold text-sm sm:text-base hover:translate-x-1"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          <span>Retour</span>
        </button>
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 sm:mb-3 leading-tight">
            Quick Choice 🎮
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 px-2 font-medium">Teste tes reflexes et tes connaissances en avions</p>
        </div>
        {/* Main Card with Enhanced Styling */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500">
            {/* Card Content */}
            <div className="relative bg-white/95 backdrop-blur-sm transition-all duration-300 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl text-center border border-yellow-100">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">⚡</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4 leading-tight">
                Prêt à jouer?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 px-2 font-medium leading-relaxed">
                Reconnais les avions à la vitesse de l'éclair 🚀
                <br />
                <span className="text-yellow-600 font-bold">15 secondes par question</span>
              </p>
              {/* Features Grid */}
              <div className="space-y-2 sm:space-y-3 mb-8">
                <div className="flex items-center space-x-2 sm:space-x-3 text-left bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg sm:rounded-2xl p-3 sm:p-4 border border-yellow-200 hover:border-yellow-400 transition-all hover:shadow-md">
                  <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                    <Zap size={20} className="sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Rapide</p>
                    <p className="text-xs sm:text-sm text-slate-600">10 questions • 150 secondes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-left bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg sm:rounded-2xl p-3 sm:p-4 border border-blue-200 hover:border-blue-400 transition-all hover:shadow-md">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <ListChecks size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Choix multiple</p>
                    <p className="text-xs sm:text-sm text-slate-600">4 options par question</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-left bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg sm:rounded-2xl p-3 sm:p-4 border border-purple-200 hover:border-purple-400 transition-all hover:shadow-md">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <Smile size={20} className="sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Amusant & éducatif</p>
                    <p className="text-xs sm:text-sm text-slate-600">+600 avions à découvrir</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/quiz/quick-choice')}
                  className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-yellow-300 to-yellow-400 text-slate-900 font-bold sm:font-black text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl group-hover:shadow-xl transition-all active:scale-95 hover:shadow-lg hover:-translate-y-1 border-2 border-yellow-200"
                >
                  <Zap size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>Lancer le défi</span>
                </button>
                <button
                  onClick={() => navigate('/quiz/history')}
                  className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold sm:font-black text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl group-hover:shadow-xl transition-all active:scale-95 hover:shadow-lg hover:-translate-y-1 border-2 border-blue-400"
                >
                  <BarChart3 size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>Historique</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizMenu;
