
import React, { useMemo, useCallback } from 'react';
import { EngineType, AircraftCategory } from '../types.ts';
import { Filter, RotateCcw } from 'lucide-react';
import { CATEGORIES } from '../data/aircraft.ts';
import { useAircraftData } from '../context/AircraftDataContext.tsx';

interface FilterPanelProps {
  selectedCategory: AircraftCategory | 'All';
  setSelectedCategory: (cat: AircraftCategory | 'All') => void;
  selectedEngine: EngineType | 'All';
  setSelectedEngine: (type: EngineType | 'All') => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedEnginesCount: number | 'All';
  setSelectedEnginesCount: (count: number | 'All') => void;
  sortBy: 'name' | 'manufacturer';
  setSortBy: (sort: 'name' | 'manufacturer') => void;
  onReset: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedEngine,
  setSelectedEngine,
  selectedCountry,
  setSelectedCountry,
  selectedEnginesCount,
  setSelectedEnginesCount,
  sortBy,
  setSortBy,
  onReset
}) => {
  const { data: AIRCRAFT_DATA } = useAircraftData();
  
  // Create memoized category list
  const categories: {id: AircraftCategory | 'All', label: string}[] = useMemo(() => [
    { id: 'All', label: 'Tous' },
    ...CATEGORIES.map(cat => ({ 
      id: cat.id as AircraftCategory, 
      label: cat.title 
    }))
  ], []);
  
  // Memoized engine labels for consistency
  const engineLabels = useMemo(() => ({
    'Jet': 'Réacteur',
    'Turboprop': 'Turbopropulseur',
    'Piston': 'Piston',
    'Propfan': 'Propfan',
    'Radial': 'Radial',
    'Ducted Fan': 'Soufflante Carénée',
    'Piston / Turboprop': 'Piston / Turbopropulseur',
    'Radial / Turboprop': 'Radial / Turbopropulseur',
    'Turboprop / Jet': 'Turbopropulseur / Réacteur',
    'Turbine': 'Turbine'
  } as Record<EngineType, string>), []);
  
  // Optimized engine filter calculation
  const engines = useMemo(() => {
    // Filter aircraft by current category selection
    const filteredByCategory = selectedCategory === 'All' 
      ? AIRCRAFT_DATA 
      : AIRCRAFT_DATA.filter(a => a.category === selectedCategory);
    
    // Build engine count map in a single pass
    const engineCounts = new Map<EngineType, number>();
    filteredByCategory.forEach(a => {
      const count = engineCounts.get(a.engineType) || 0;
      engineCounts.set(a.engineType, count + 1);
    });
    
    const uniqueEngines = [...new Set(filteredByCategory.map(a => a.engineType))].sort() as EngineType[];
    return [
      { id: 'All' as const, label: 'Tous', count: filteredByCategory.length },
      ...uniqueEngines.map(engine => ({ 
        id: engine as EngineType | 'All', 
        label: engineLabels[engine] || engine,
        count: engineCounts.get(engine) || 0
      }))
    ];
  }, [selectedCategory, engineLabels]);

  // Country code mapping for flags
  const countryCodeMap: Record<string, string> = useMemo(() => ({
    'USA': 'us',
    'France': 'fr',
    'Royaume-Uni': 'gb',
    'Allemagne': 'de',
    'Russie': 'ru',
    'Chine': 'cn',
    'Japon': 'jp',
    'Italie': 'it',
    'Canada': 'ca',
    'Suède': 'se',
    'Pays-Bas': 'nl',
    'Espagne': 'es',
    'Suisse': 'ch',
    'Autriche': 'at',
    'Brésil': 'br',
    'Argentine': 'ar',
    'Australie': 'au',
    'Inde': 'in',
    'Israël': 'il',
    'Afrique du Sud': 'za',
    'Corée du Sud': 'kr',
    'Pologne': 'pl',
    'République Tchèque': 'cz',
    'République tchèque': 'cz',
    'Belgique': 'be',
    'Slovénie': 'si',
    'Roumanie': 'ro',
    'Ukraine': 'ua',
    'Yougoslavie': 'rs',
    'Indonésie': 'id',
    'Pakistan': 'pk',
    'Turquie': 'tr',
    'Émirats arabes unis': 'ae',
    'Taiwan': 'tw',
    'Taïwan': 'tw',
    'Chili': 'cl',
    'Colombie': 'co',
    'Nouvelle-Zélande': 'nz',
    'Iran': 'ir',
    'Finlande': 'fi',
    'UK': 'gb',
    'USA / Royaume-Uni': 'us',
    'USA / UK': 'us',
    'UK/USA': 'gb',
    'Royaume-Uni / USA': 'gb',
    'France / Allemagne': 'fr',
    'France / UK': 'fr',
    'France / Italie': 'fr',
    'Allemagne / Italie / UK': 'de',
    'Allemagne / Italie / Espagne / UK': 'de',
    'Italie / Brésil': 'it',
    'Italie / Finlande': 'it',
    'Italie / UK': 'it',
    'Italie / USA': 'it',
    'Chine / Pakistan': 'cn',
    'Pakistan / Chine': 'pk',
    'Japon / USA': 'jp',
    'Russie / Italie': 'ru',
    'Russie / Pologne': 'ru',
    'Ukraine / Russie': 'ua',
    'Espagne / Indonésie': 'es',
    'Canada / Europe': 'ca',
    'Europe': 'eu'
  }), []);
  
  // Memoized countries list
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(AIRCRAFT_DATA.map(a => a.country))];
    // Separate countries with "/" and sort each group
    const singleCountries = uniqueCountries.filter(c => !c.includes('/')).sort();
    const multipleCountries = uniqueCountries.filter(c => c.includes('/')).sort();
    
    return [
      { id: 'All', label: 'Tous', flagCode: null }, 
      ...singleCountries.map(c => ({ 
        id: c, 
        label: c,
        flagCode: countryCodeMap[c] || null
      })),
      ...multipleCountries.map(c => ({ 
        id: c, 
        label: c,
        flagCode: countryCodeMap[c] || null
      }))
    ];
  }, [countryCodeMap]);

  // Optimized engines count calculation
  const enginesCounts = useMemo(() => {
    // Filter aircraft by current selections (excluding engines count itself)
    const filteredByCriteria = AIRCRAFT_DATA.filter(a =>
      (selectedCategory === 'All' || a.category === selectedCategory) &&
      (selectedEngine === 'All' || a.engineType === selectedEngine) &&
      (selectedCountry === 'All' || a.country === selectedCountry)
    );
    
    // Build count map in a single pass
    const countMap = new Map<number, number>();
    filteredByCriteria.forEach(a => {
      const count = countMap.get(a.enginesCount) || 0;
      countMap.set(a.enginesCount, count + 1);
    });
    
    const uniqueCounts = [...new Set(filteredByCriteria.map(a => a.enginesCount))].sort((a, b) => a - b);
    return [
      { id: 'All' as const, label: 'Tous', count: filteredByCriteria.length },
      ...uniqueCounts.map(count => ({ 
        id: Number(count), 
        label: count === 1 ? '1 moteur' : `${count} moteurs`,
        count: countMap.get(count) || 0
      }))
    ];
  }, [selectedCategory, selectedEngine, selectedCountry]);

  // Memoize callback handlers to prevent unnecessary re-renders of child components
  const handleSortByName = useCallback(() => setSortBy('name'), [setSortBy]);
  const handleSortByManufacturer = useCallback(() => setSortBy('manufacturer'), [setSortBy]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm sticky top-24 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 7rem)' }}>
      <div className="sticky top-0 z-10 px-6 py-4 bg-white border-b border-slate-100 rounded-t-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          <Filter size={18} className="text-yellow-600" />
          <h2 className="font-bold text-slate-900">Filtres</h2>
          </div>
          <button 
            onClick={onReset}
            className="text-xs font-medium text-slate-400 hover:text-yellow-600 transition-colors flex items-center gap-1"
          >
            <RotateCcw size={12} />
            Réinitialiser
          </button>
        </div>
      </div>

      <div className="space-y-6 px-6 pb-6 pt-4">
        {/* Sort Options */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Trier par</h3>
          <div className="flex gap-2">
            <button
              onClick={handleSortByName}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                sortBy === 'name'
                  ? 'bg-yellow-50 text-yellow-700 font-semibold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Nom
            </button>
            <button
              onClick={handleSortByManufacturer}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                sortBy === 'manufacturer'
                  ? 'bg-yellow-50 text-yellow-700 font-semibold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Constructeur
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Catégorie</h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.id 
                    ? 'bg-yellow-50 text-yellow-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Engine Type Filter */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Type de moteur</h3>
          <div className="space-y-1">
            {engines.map((engine) => (
              <button
                key={engine.id}
                onClick={() => setSelectedEngine(engine.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedEngine === engine.id 
                    ? 'bg-yellow-50 text-yellow-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>{engine.label}</span>
                <span className="text-xs text-slate-400 ml-1">({engine.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Country Filter */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Pays d'origine</h3>
          <div className="space-y-1 max-h-64 overflow-y-auto">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                  selectedCountry === country.id 
                    ? 'bg-yellow-50 text-yellow-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {country.id === 'Europe' ? (
                  <img
                    src="https://flagcdn.com/w80/eu.png"
                    srcSet="https://flagcdn.com/w160/eu.png 2x"
                    width="20"
                    height="15"
                    alt="European Union"
                    className="rounded-sm flex-shrink-0 object-cover"
                    loading="lazy"
                  />
                ) : !country.id.includes('/') && country.flagCode ? (
                  <img
                    src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                    srcSet={`https://flagcdn.com/w160/${country.flagCode}.png 2x`}
                    width="20"
                    height="15"
                    alt={country.label}
                    className="rounded-sm flex-shrink-0 object-cover"
                    loading="lazy"
                  />
                ) : country.id === 'All' ? (
                  <span className="text-base">🌍</span>
                ) : null}
                <span className="flex-1">{country.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Engines Count Filter */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Nombre de moteurs</h3>
          <div className="flex flex-wrap gap-2">
            {enginesCounts.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedEnginesCount(item.id === 'All' ? 'All' : (item.id as number))}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  selectedEnginesCount === item.id
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
                }`}
              >
                {item.label} <span className="text-opacity-70 ml-1">({item.count})</span>
              </button>
            ))}
          </div>
        </div>

        
      </div>

      <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Note Rapide</p>
        <p className="text-xs text-slate-500 leading-relaxed">
          Les aéronefs sont classés en fonction de leur rôle opérationnel principal et de leurs systèmes de propulsion.
        </p>
      </div>
    </div>
  );
};

export default FilterPanel;
