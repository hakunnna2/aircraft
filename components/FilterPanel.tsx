
import React, { useMemo, useCallback } from 'react';
import { EngineType, AircraftCategory } from '../types.ts';
import { Filter, RotateCcw } from 'lucide-react';
import { AIRCRAFT_DATA, CATEGORIES } from '../data/aircraft.ts';

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
      { id: 'All', label: 'Tous', count: filteredByCategory.length },
      ...uniqueEngines.map(engine => ({ 
        id: engine, 
        label: engineLabels[engine] || engine,
        count: engineCounts.get(engine) || 0
      }))
    ];
  }, [selectedCategory, engineLabels]);

  // Memoized countries list
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(AIRCRAFT_DATA.map(a => a.country))].sort();
    return [{ id: 'All', label: 'Tous' }, ...uniqueCountries.map(c => ({ id: c, label: c }))];
  }, []);

  // Optimized engines count calculation
  const enginesCounts = useMemo(() => {
    // Filter aircraft by current category selection
    const filteredByCategory = selectedCategory === 'All' 
      ? AIRCRAFT_DATA 
      : AIRCRAFT_DATA.filter(a => a.category === selectedCategory);
    
    // Build count map in a single pass
    const countMap = new Map<number, number>();
    filteredByCategory.forEach(a => {
      const count = countMap.get(a.enginesCount) || 0;
      countMap.set(a.enginesCount, count + 1);
    });
    
    const uniqueCounts = [...new Set(filteredByCategory.map(a => a.enginesCount))].sort((a, b) => a - b);
    return [
      { id: 'All' as const, label: 'Tous', count: filteredByCategory.length },
      ...uniqueCounts.map(count => ({ 
        id: count, 
        label: count === 1 ? '1 moteur' : `${count} moteurs`,
        count: countMap.get(count) || 0
      }))
    ];
  }, [selectedCategory]);

  // Memoize callback handlers to prevent unnecessary re-renders of child components
  const handleSortByName = useCallback(() => setSortBy('name'), [setSortBy]);
  const handleSortByManufacturer = useCallback(() => setSortBy('manufacturer'), [setSortBy]);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 7rem)' }}>
      <div className="flex items-center justify-between mb-6">
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

      <div className="space-y-6">
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
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* Engines Count Filter */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Nombre de moteurs</h3>
          <div className="flex flex-wrap gap-2">
            {enginesCounts.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedEnginesCount(item.id)}
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
