import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAircraftData } from '../context/AircraftDataContext.tsx';
import { Heart, ArrowLeft } from 'lucide-react';
import { loadFavorites, toggleFavorite } from '../utils/favoritesService';
import AircraftCard from '../components/AircraftCard';

const FavoritesView: React.FC = () => {
  const { data: AIRCRAFT_DATA, loading: dataLoading } = useAircraftData();
  const navigate = useNavigate();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Load favorites on mount
  useEffect(() => {
    const loadFavs = async () => {
      try {
        const favs = await loadFavorites();
        setFavoriteIds(favs);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFavs();
  }, []);

  // Get favorited aircraft
  const favoriteAircraftList = AIRCRAFT_DATA.filter((aircraft) =>
    favoriteIds.includes(aircraft.id)
  );

  // Handle remove from favorites
  const handleRemoveFavorite = async (aircraftId: string) => {
    const updated = await toggleFavorite(favoriteIds, aircraftId);
    setFavoriteIds(updated);
  };

  if (loading || dataLoading) {
    return (
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500 mx-auto"></div>
          <p className="text-slate-600 font-semibold">Chargement des favoris...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-6 transition"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Heart size={32} fill="currentColor" className="text-red-500" />
          <h1 className="text-4xl font-bold text-slate-900">Avions Favoris</h1>
        </div>

        <p className="text-slate-600 text-lg">
          {favoriteAircraftList.length === 0
            ? 'Aucun favori pour le moment. Commencez à ajouter des avions à vos favoris!'
            : `Vous avez ${favoriteAircraftList.length} avion${favoriteAircraftList.length > 1 ? 's' : ''} favori${favoriteAircraftList.length > 1 ? 's' : ''}`}
        </p>
      </div>

      {/* Favorites Grid */}
      {favoriteAircraftList.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteAircraftList.map((aircraft) => (
              <div key={aircraft.id} className="relative group">
                <AircraftCard aircraft={aircraft} />

                {/* Remove button overlay */}
                <button
                  onClick={() => handleRemoveFavorite(aircraft.id)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                  title="Supprimer des favoris"
                >
                  <Heart size={20} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto text-center py-16">
          <div className="bg-slate-100 rounded-lg p-12 inline-block">
            <Heart size={64} className="text-gray-400 mx-auto mb-4 opacity-50" />
            <p className="text-slate-600 text-xl">
              Cliquez sur le bouton cœur sur n'importe quel avion pour l'ajouter à vos favoris!
            </p>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const exploreSection = document.getElementById('explore');
                  if (exploreSection) {
                    exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 300);
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Parcourir les Avions
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesView;
