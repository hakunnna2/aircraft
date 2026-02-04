import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Aircraft } from '../types.ts';
import { ChevronRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface AircraftCardProps {
  aircraft: Aircraft;
  priority?: boolean;
}

const AircraftCard: React.FC<AircraftCardProps> = ({ aircraft, priority = false }) => {
  const [imageError, setImageError] = useState(false);

  // Helper function to get category badge text
  const getCategoryBadge = (category: Aircraft['category']): string => {
    const categoryMap: Record<Aircraft['category'], string> = {
      'Combat Aircraft': 'Combat',
      'Combat Support Aircraft': 'Soutien',
      'Combat Training Aircraft': 'Entrainement',
      'Civil Jet Airliners': 'Jet Airliner',
      'Civil Turboprop Airliners': 'Turboprop',
      'Civil Utility': 'Utilitaire',
      'Private Executive Aircraft': 'Business',
      'Private Light Aircraft': 'Léger',
      'Helicopters': 'Hélicoptère',
      'Unmanned Aerial Vehicle (UAV)': 'Drone'
    };
    return categoryMap[category] || 'Aircraft';
  };

  return (
    <Link 
      to={`/aircraft/${aircraft.id}`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden bg-slate-200">
        {!imageError ? (
          <OptimizedImage
            imageId={aircraft.id}
            alt={aircraft.name}
            transform="thumbnail"
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400 text-slate-500">
            <span className="text-sm font-semibold">Image non disponible</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white rounded-md border border-white/20">
            {getCategoryBadge(aircraft.category)}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
            {aircraft.name}
          </h3>
        </div>
        
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {aircraft.role}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Constructeur</span>
            <span className="text-xs font-medium text-slate-700">{aircraft.manufacturer}</span>
          </div>
          <div className="flex items-center text-yellow-600 group-hover:translate-x-1 transition-transform">
            <span className="text-xs font-semibold mr-1">Détails</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AircraftCard;

