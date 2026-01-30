
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Plane } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 page-transition">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex p-6 bg-yellow-100 rounded-full text-yellow-600 mb-6">
          <Plane size={64} className="animate-bounce" />
        </div>
        
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Vol introuvable
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Désolé, la page que vous recherchez semble avoir décollé sans laisser de plan de vol. 
          Retournons à la tour de contrôle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-500 transition-all shadow-lg active:scale-95"
          >
            <Home size={20} className="mr-2" />
            Retour à l'accueil
          </Link>
          
          <Link 
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all active:scale-95"
          >
            <Search size={20} className="mr-2" />
            Explorer les avions
          </Link>
        </div>
        
        <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-500">
            Si vous pensez qu'il s'agit d'une erreur, veuillez vérifier l'URL ou retourner à la page d'accueil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
