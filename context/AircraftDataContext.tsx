import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { Aircraft } from '../types.ts';

interface AircraftDataState {
  data: Aircraft[];
  loading: boolean;
  error: Error | null;
}

const AircraftDataContext = createContext<AircraftDataState>({
  data: [],
  loading: true,
  error: null
});

let aircraftDataCache: Aircraft[] | null = null;
let loadingPromise: Promise<Aircraft[]> | null = null;

const loadAircraftData = async (): Promise<Aircraft[]> => {
  if (aircraftDataCache) {
    return aircraftDataCache;
  }
  
  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = import('../data/aircraft.ts').then(module => {
    aircraftDataCache = module.AIRCRAFT_DATA;
    return aircraftDataCache!;
  });

  return loadingPromise;
};

export const AircraftDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AircraftDataState>({
    data: aircraftDataCache || [],
    loading: !aircraftDataCache,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    if (!aircraftDataCache) {
      loadAircraftData()
        .then(data => {
          if (isMounted) {
            setState({ data, loading: false, error: null });
          }
        })
        .catch(error => {
          if (isMounted) {
            setState({ data: [], loading: false, error });
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(() => state, [state.data.length, state.loading, state.error]);

  return (
    <AircraftDataContext.Provider value={value}>
      {children}
    </AircraftDataContext.Provider>
  );
};

export const useAircraftData = () => useContext(AircraftDataContext);
