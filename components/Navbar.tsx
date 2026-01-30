
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Search, Menu, X } from 'lucide-react';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';
import { useDebounce } from '../hooks/useDebounce.ts';
import { sanitizeInput } from '../utils/helpers.ts';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(searchQuery, 200);

  const handleSearchChange = (value: string) => {
    // Sanitize input to prevent XSS using utility function
    const sanitizedValue = sanitizeInput(value);
    setSearchQuery(sanitizedValue);
    setShowSuggestions(sanitizedValue.length > 0);
    if (sanitizedValue.length > 0) {
      navigate('/');
    }
  };

  const handleSuggestionClick = (aircraftId: string) => {
    setSearchQuery('');
    setShowSuggestions(false);
    setIsOpen(false);
    onSearch('');
    navigate(`/aircraft/${aircraftId}`);
  };

  // Use memoized filtered results with debounced query to avoid recalculating on every keystroke
  const filteredAircraft = useMemo(() => {
    if (debouncedQuery.length === 0) return [];
    
    return AIRCRAFT_DATA
      .filter((a) => 
        a.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
        a.manufacturer.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
      .slice(0, 5);
  }, [debouncedQuery]);

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center relative">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="p-1.5 md:p-2.5 bg-yellow-400 rounded-xl text-slate-900 transition-all group-hover:rotate-12 group-active:scale-90">
                <Plane size={22} className="md:w-6 md:h-6" />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">SkyPedia</span>
            </Link>

          {/* Desktop Search */}
          <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); navigate('/'); }} className="hidden md:flex flex-1 max-w-lg mx-12">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Rechercher un avion (ex: Boeing 747)..."
                className="block w-full pl-11 pr-4 py-3 bg-slate-100 border border-transparent rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:border-white transition-all shadow-inner"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              
              {/* Desktop Suggestions Dropdown */}
              {showSuggestions && filteredAircraft.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50">
                  {filteredAircraft.map((aircraft) => (
                    <button
                      key={aircraft.id}
                      type="button"
                      onClick={() => handleSuggestionClick(aircraft.id)}
                      className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center space-x-3 border-b border-slate-100 last:border-0"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                        <img src={aircraft.image} alt={aircraft.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{aircraft.name}</p>
                        <p className="text-xs text-slate-500 truncate">{aircraft.manufacturer}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center">
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 bg-slate-100 active:bg-slate-200 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile Search Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] pt-20">
          <div className="bg-white p-4 shadow-xl rounded-b-2xl">
            <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); navigate('/'); }}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search size={20} />
                </div>
                <input
                  autoFocus
                  type="text"
                  placeholder="Rechercher un avion..."
                  className="block w-full pl-12 pr-4 py-4 bg-slate-100 border-none rounded-2xl text-base font-medium focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
            </form>
            
            {/* Mobile Suggestions */}
            {filteredAircraft.length > 0 && (
              <div className="mt-3 space-y-2 max-h-[60vh] overflow-y-auto">
                {filteredAircraft.map((aircraft) => (
                  <button
                    key={aircraft.id}
                    type="button"
                    onClick={() => handleSuggestionClick(aircraft.id)}
                    className="w-full px-3 py-3 text-left bg-slate-50 hover:bg-slate-100 active:bg-slate-200 rounded-xl flex items-center space-x-3"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                      <img src={aircraft.image} alt={aircraft.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{aircraft.name}</p>
                      <p className="text-xs text-slate-500 truncate">{aircraft.manufacturer}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
