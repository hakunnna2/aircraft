import React, { useState, useMemo, useEffect, useRef } from 'react';
import { AircraftCategory, EngineType } from '../types.ts';
import { BookOpen, Filter, Bookmark, BookmarkCheck } from 'lucide-react';
import { saveBookmark, loadBookmark } from '../utils/bookmarkService';
import { useAircraftData } from '../context/AircraftDataContext.tsx';
import { OptimizedImage } from '../components/OptimizedImage';

const BookView: React.FC = () => {
  const { data: AIRCRAFT_DATA, loading } = useAircraftData();
  const [selectedCategory, setSelectedCategory] = useState<AircraftCategory | 'All'>('All');
  const [selectedEngine, setSelectedEngine] = useState<EngineType | 'All'>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedId, setBookmarkedId] = useState<string | null>(null);
  const [orderIds, setOrderIds] = useState<string[]>(AIRCRAFT_DATA.length > 0 ? AIRCRAFT_DATA.map((aircraft) => aircraft.id) : []);
  const [isLoaded, setIsLoaded] = useState(false);
  const aircraftRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Load bookmark data from Firebase on mount
  useEffect(() => {
    const loadData = async () => {
      const data = await loadBookmark();
      if (data) {
        if (data.bookmarkedId) {
          setBookmarkedId(data.bookmarkedId);
        }
        if (data.orderIds && data.orderIds.length > 0) {
          const allIds = AIRCRAFT_DATA.map((aircraft) => aircraft.id);
          const knownIds = data.orderIds.filter((id) => allIds.includes(id));
          const newIds = allIds.filter((id) => !knownIds.includes(id));
          setOrderIds([...knownIds, ...newIds]);
        }
      }
      setIsLoaded(true);
    };
    loadData();
  }, []);

  // Save to Firebase when bookmark or order changes (only after initial load)
  useEffect(() => {
    if (!isLoaded) return;

    const allIds = AIRCRAFT_DATA.map((aircraft) => aircraft.id);
    const knownIds = orderIds.filter((id) => allIds.includes(id));
    const newIds = allIds.filter((id) => !knownIds.includes(id));
    const nextOrder = [...knownIds, ...newIds];

    if (nextOrder.join('|') !== orderIds.join('|')) {
      if (newIds.length > 0) {
        console.log(`✅ ${newIds.length} new aircraft added to book!`, newIds);
      }
      setOrderIds(nextOrder);
      return;
    }

    // Save to Firebase only
    saveBookmark(bookmarkedId, nextOrder);
  }, [orderIds, bookmarkedId, isLoaded]);

  const aircraftById = useMemo(() => {
    return new Map(AIRCRAFT_DATA.map((aircraft) => [aircraft.id, aircraft]));
  }, []);

  const orderedAircraft = useMemo(() => {
    return orderIds
      .map((id) => aircraftById.get(id))
      .filter((aircraft): aircraft is typeof AIRCRAFT_DATA[number] => Boolean(aircraft));
  }, [orderIds, aircraftById]);

  // Filter aircraft
  const filteredAircraft = useMemo(() => {
    return orderedAircraft.filter((aircraft) => {
      const matchesCategory = selectedCategory === 'All' || aircraft.category === selectedCategory;
      const matchesEngine = selectedEngine === 'All' || aircraft.engineType === selectedEngine;
      return matchesCategory && matchesEngine;
    });
  }, [orderedAircraft, selectedCategory, selectedEngine]);

  // Scroll to bookmark when loaded
  useEffect(() => {
    if (bookmarkedId && aircraftRefs.current[bookmarkedId]) {
      // Longer delay to ensure refs are attached
      setTimeout(() => {
        aircraftRefs.current[bookmarkedId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [bookmarkedId]);

  const handleBookmark = async (aircraftId: string) => {
    setBookmarkedId(aircraftId);
    await saveBookmark(aircraftId, orderIds);
  };

  const goToBookmark = () => {
    if (bookmarkedId && aircraftRefs.current[bookmarkedId]) {
      aircraftRefs.current[bookmarkedId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (filteredAircraft.length === 0) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-slate-400" />
          <p className="text-xl">Aucun appareil trouvé</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500 mx-auto"></div>
          <p className="text-slate-600 font-semibold">Chargement de l'encyclopédie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header with filters */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <h1 className="text-xl font-bold">Mode Lecture</h1>
            <span className="text-sm text-slate-600">
              {filteredAircraft.length} avions
            </span>
          </div>

          <div className="flex items-center gap-2">
            {bookmarkedId && (
              <button
                onClick={goToBookmark}
                className="flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors"
                title="Aller au signet"
              >
                <BookmarkCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Signet</span>
              </button>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filtres</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="border-t border-slate-200 bg-white/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Catégorie</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value as AircraftCategory | 'All');
                    }}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="All">Toutes les catégories</option>
                    <option value="Combat Aircraft">Avions de Combat</option>
                    <option value="Civil Jet Airliners">Avions de Ligne</option>
                    <option value="Combat Support Aircraft">Avions de Soutien</option>
                    <option value="Combat Training Aircraft">Avions d'Entraînement</option>
                    <option value="Civil Turboprop Airliners">Avions de Ligne Turbopropulsés</option>
                    <option value="Civil Utility">Avions de Rôle Spécialisé</option>
                    <option value="Private Executive Aircraft">Avions d'Affaires</option>
                    <option value="Private Light Aircraft">Avions Légers Privés</option>
                    <option value="Helicopters">Hélicoptères</option>
                    <option value="Unmanned Aerial Vehicle (UAV)">Drones & UAV</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Type de moteur</label>
                  <select
                    value={selectedEngine}
                    onChange={(e) => {
                      setSelectedEngine(e.target.value as EngineType | 'All');
                    }}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="All">Tous les moteurs</option>
                    <option value="Jet">Jet</option>
                    <option value="Turboprop">Turbopropulseur</option>
                    <option value="Piston">Piston</option>
                    <option value="Turbine">Turbine</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Book Content - Continuous Scroll */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {filteredAircraft.map((aircraft, index) => (
          <div
            key={aircraft.id}
            ref={(el) => {
              aircraftRefs.current[aircraft.id] = el;
            }}
            className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden scroll-mt-24"
          >
            {/* Aircraft Image */}
            <div className="relative h-[40vh] sm:h-[50vh] bg-slate-100">
              <OptimizedImage
                imageId={aircraft.id}
                alt={aircraft.name}
                transform="detail"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                {aircraft.category}
              </div>
              <button
                onClick={() => handleBookmark(aircraft.id)}
                className={`absolute top-4 left-4 p-2 rounded-lg transition-all ${ 
                  bookmarkedId === aircraft.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-white/90 text-slate-700 hover:bg-white'
                }`}
                title={bookmarkedId === aircraft.id ? 'Signet enregistré' : 'Ajouter un signet'}
              >
                {bookmarkedId === aircraft.id ? (
                  <BookmarkCheck className="w-5 h-5" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Aircraft Details */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Title */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-3xl sm:text-4xl font-bold">{aircraft.name}</h2>
                  <span className="text-sm text-slate-500 flex-shrink-0 mt-2">
                    {index + 1} / {filteredAircraft.length}
                  </span>
                </div>
                <p className="text-lg text-yellow-400">{aircraft.role}</p>
              </div>

              {/* Basic Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Fabricant</div>
                  <div className="font-semibold">{aircraft.manufacturer}</div>
                </div>
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Pays</div>
                  <div className="font-semibold">{aircraft.country}</div>
                </div>
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Moteur</div>
                  <div className="font-semibold">{aircraft.engineType}</div>
                </div>
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Nb. Moteurs</div>
                  <div className="font-semibold">{aircraft.enginesCount}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Description</h3>
                <p className="text-slate-700 leading-relaxed">{aircraft.description}</p>
              </div>

              {/* Recognition Tips */}
              {aircraft.recognitionTips && aircraft.recognitionTips.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Points de Reconnaissance</h3>
                  <ul className="space-y-2">
                    {aircraft.recognitionTips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="text-slate-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {aircraft.specs && (
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Spécifications</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {aircraft.specs.wingspan && (
                      <div className="bg-slate-100 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Envergure</div>
                        <div className="font-semibold text-sm">{aircraft.specs.wingspan}</div>
                      </div>
                    )}
                    {aircraft.specs.length && (
                      <div className="bg-slate-100 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Longueur</div>
                        <div className="font-semibold text-sm">{aircraft.specs.length}</div>
                      </div>
                    )}
                    {aircraft.specs.height && (
                      <div className="bg-slate-100 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Hauteur</div>
                        <div className="font-semibold text-sm">{aircraft.specs.height}</div>
                      </div>
                    )}
                    {aircraft.specs.payload && (
                      <div className="bg-slate-100 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Charge utile</div>
                        <div className="font-semibold text-sm">{aircraft.specs.payload}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* End of book indicator */}
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-500" />
          <p className="text-slate-600 text-lg">Fin du livre</p>
          <p className="text-slate-500 text-sm mt-2">
            Vous avez parcouru {filteredAircraft.length} avions
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default BookView;
