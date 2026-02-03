import React, { createContext, useContext, useMemo } from 'react';
import { Aircraft } from '../types.ts';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';

interface AircraftDataState {
  data: Aircraft[];
  loading: boolean;
  error: Error | null;
}

const AircraftDataContext = createContext<AircraftDataState>({
  data: AIRCRAFT_DATA,
  loading: false,
  error: null
});

export const AircraftDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Use local data only - Firebase is only for bookmarks and game data
  const value = useMemo(() => ({ 
    data: AIRCRAFT_DATA, 
    loading: false, 
    error: null 
  }), []);

  return (
    <AircraftDataContext.Provider value={value}>
      {children}
    </AircraftDataContext.Provider>
  );
};

export const useAircraftData = () => useContext(AircraftDataContext);
