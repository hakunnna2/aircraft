import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { Aircraft } from '../types.ts';

interface AircraftDataState {
  data: Aircraft[];
  loading: boolean;
  error: Error | null;
  startLoading?: () => void;
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
    loading: false, // Start as not loading - will load on demand
    error: null
  });
  const [hasStartedLoading, setHasStartedLoading] = useState(!!aircraftDataCache);

  // Expose a method to trigger loading
  const startLoading = () => {
    if (aircraftDataCache || hasStartedLoading) return;
    
    setHasStartedLoading(true);
    setState(prev => ({ ...prev, loading: true }));
    
    loadAircraftData()
      .then(data => {
        setState({ data, loading: false, error: null });
      })
      .catch(error => {
        setState({ data: [], loading: false, error });
      });
  };

  const value = useMemo(() => ({
    ...state,
    startLoading
  }), [state.data.length, state.loading, state.error]);

  return (
    <AircraftDataContext.Provider value={value as any}>
      {children}
    </AircraftDataContext.Provider>
  );
};

export const useAircraftData = () => {
  const context = useContext(AircraftDataContext);
  
  // Automatically trigger loading when hook is used
  useEffect(() => {
    if (!aircraftDataCache && !(context as any).loading) {
      (context as any).startLoading?.();
    }
  }, []);
  
  return context;
};
