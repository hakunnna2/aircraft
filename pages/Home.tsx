
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES } from '../data/aircraft.ts';
import { AircraftCategory, EngineType } from '../types.ts';
import AircraftCard from '../components/AircraftCard.tsx';
import FilterPanel from '../components/FilterPanel.tsx';
import { useAircraftData } from '../context/AircraftDataContext.tsx';
import { ArrowRight, PlaneTakeoff, Info, Filter as FilterIcon } from 'lucide-react';

interface HomeProps {
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const { data: AIRCRAFT_DATA } = useAircraftData();
  
    // Scroll to library section when search is active
    useEffect(() => {
      if (searchQuery && searchQuery.trim().length > 0) {
        const exploreSection = document.getElementById('explore');
        if (exploreSection) {
          exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, [searchQuery]);
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<AircraftCategory | 'All'>(
    (categoryFromUrl as AircraftCategory) || 'All'
  );
  const [selectedEngine, setSelectedEngine] = useState<EngineType | 'All'>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedEnginesCount, setSelectedEnginesCount] = useState<number | 'All'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'manufacturer'>('name');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(15);
  const isInitialMount = useRef(true);
  const hasScrolledOnce = useRef(false);

  // Ensure page starts at top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Reset on mount
    isInitialMount.current = true;
    hasScrolledOnce.current = false;
  }, []);

  // Scroll to library section when returning with a category filter
  useEffect(() => {
    if (categoryFromUrl) {
      setTimeout(() => {
        const exploreSection = document.getElementById('explore');
        if (exploreSection) {
          exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [categoryFromUrl]);

  // Scroll to library section when filters change (but not on initial mount or refresh)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    // Only scroll if user has actually interacted (not on page load/refresh)
    if (!hasScrolledOnce.current && (selectedCategory === 'All' && selectedEngine === 'All' && selectedCountry === 'All')) {
      return;
    }
    
    hasScrolledOnce.current = true;
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory, selectedEngine, selectedCountry, selectedEnginesCount, sortBy]);

  const applyCategoryQuickFilter = (category: AircraftCategory | 'All') => {
    setSelectedCategory(category);
    setSelectedEngine('All');
    setSelectedCountry('All');
    setSelectedEnginesCount('All');
  };

  const handleCategoryChange = (category: AircraftCategory | 'All') => {
    setSelectedCategory(category);
    // Reset dependent filters to avoid invalid combinations
    setSelectedEngine('All');
    setSelectedCountry('All');
    setSelectedEnginesCount('All');
  };

  const filteredAircraft = useMemo(() => {
    const effectiveEnginesCount = selectedEnginesCount === 'All'
      ? 'All'
      : Number(selectedEnginesCount);

    let filtered = AIRCRAFT_DATA.filter((a) => {
      const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           a.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
      const matchesEngine = selectedEngine === 'All' || a.engineType === selectedEngine;
      const matchesCountry = selectedCountry === 'All' || a.country === selectedCountry;
      const matchesEnginesCount = effectiveEnginesCount === 'All'
        ? true
        : a.enginesCount === effectiveEnginesCount;
      return matchesSearch && matchesCategory && matchesEngine && matchesCountry && matchesEnginesCount;
    });
    
    // Sort aircraft
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.manufacturer.localeCompare(b.manufacturer);
      }
    });
    
    return filtered;
  }, [searchQuery, selectedCategory, selectedEngine, selectedCountry, selectedEnginesCount, sortBy]);

  // Reset display limit when filters change
  useEffect(() => {
    setDisplayLimit(15);
  }, [searchQuery, selectedCategory, selectedEngine, selectedCountry, selectedEnginesCount, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedEngine('All');
    setSelectedCountry('All');
    setSelectedEnginesCount('All');
    setSortBy('name');
    setDisplayLimit(15);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 space-y-8 md:space-y-16 page-transition">
      <section className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden h-[500px] md:h-[550px] flex items-center justify-center md:justify-start bg-slate-900 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&w=1920&q=80" 
            alt="Aircraft Background"
            loading="eager"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-16 max-w-2xl text-white w-full text-center md:text-left py-12">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-400 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 text-slate-900">
            <PlaneTakeoff size={14} className="mr-2" />
            Guide pour mon petit JoJo
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            Maîtrisez la Reconnaissance Aérienne
          </h1>
          <p className="text-sm md:text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Votre encyclopédie visuelle complète pour les avions civils, militaires et de collection. Identifiez chaque appareil au premier coup d'œil.
          </p>
          <button 
            onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-yellow-50 transition-all shadow-lg active:scale-95"
          >
            Commencer l'exploration
          </button>
        </div>
      </section>

      <section id="browse-categories">
        <div className="mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900">Parcourir les catégories</h2>
          <p className="text-sm md:text-base text-slate-500">Découvrez les aéronefs par leur rôle principal</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => {
                applyCategoryQuickFilter(cat.id);
                document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-video shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              <div className="absolute inset-0 p-5 md:p-6 text-white w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{cat.title}</h3>
                  <p className="hidden md:block text-xs text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center text-xs md:text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 drop-shadow-2xl">
                  Explorer <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="explore" className="pt-8 md:pt-16 scroll-mt-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="hidden lg:block">
            <FilterPanel 
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
              selectedEngine={selectedEngine}
              setSelectedEngine={setSelectedEngine}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              selectedEnginesCount={selectedEnginesCount}
              setSelectedEnginesCount={setSelectedEnginesCount}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onReset={resetFilters}
            />
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">Bibliothèque</h2>
                  <span className="px-2.5 py-0.5 bg-slate-200 text-slate-600 rounded-full text-[10px] md:text-xs font-bold">
                    {filteredAircraft.length}
                  </span>
                </div>
              </div>
              
              <div className="lg:hidden">
                <div className="flex items-center space-x-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="flex-shrink-0 flex items-center bg-slate-900 text-white p-2 rounded-lg mr-1 hover:bg-slate-800 transition-colors"
                  >
                    <FilterIcon size={14} />
                  </button>
                  {['All', ...CATEGORIES.map(c => c.id)].map((catId) => (
                    <button
                      key={catId}
                      onClick={() => applyCategoryQuickFilter(catId as AircraftCategory | 'All')}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === catId 
                          ? 'bg-yellow-400 text-slate-900 shadow-md shadow-yellow-200' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {catId === 'All' ? 'Tous' : CATEGORIES.find(c => c.id === catId)?.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredAircraft.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredAircraft.slice(0, displayLimit).map((aircraft) => (
                    <AircraftCard key={aircraft.id} aircraft={aircraft} />
                  ))}
                </div>
                
                {filteredAircraft.length > displayLimit && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setDisplayLimit(prev => prev + 15)}
                      className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg active:scale-95 flex items-center gap-2"
                    >
                      Voir plus
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        +{Math.min(15, filteredAircraft.length - displayLimit)}
                      </span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl py-12 md:py-20 px-6 flex flex-col items-center text-center">
                <div className="p-4 bg-slate-100 rounded-full text-slate-400 mb-4">
                  <Info size={32} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Aucun résultat</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Ajustez vos filtres pour découvrir d'autres aéronefs fascinants.
                </p>
                <button 
                  onClick={resetFilters}
                  className="mt-6 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors active:scale-95"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Sheet */}
      {showMobileFilters && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-50 lg:hidden max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Filtres</h3>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
            <div className="px-6 pb-6">
              <FilterPanel 
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                selectedEngine={selectedEngine}
                setSelectedEngine={setSelectedEngine}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                selectedEnginesCount={selectedEnginesCount}
                setSelectedEnginesCount={setSelectedEnginesCount}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onReset={resetFilters}
              />
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full mt-6 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors active:scale-95"
              >
                Appliquer les filtres
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
