import React from 'react';
import { useLocation } from 'react-router-dom';
import { AircraftDataProvider } from '../context/AircraftDataContext';

// Routes that don't need aircraft data immediately
const ROUTES_WITHOUT_DATA = ['/quiz'];

export const DataLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Check if current route needs data
  const needsData = !ROUTES_WITHOUT_DATA.some(route => location.pathname.startsWith(route));
  
  if (!needsData) {
    return <>{children}</>;
  }
  
  return (
    <AircraftDataProvider>
      {children}
    </AircraftDataProvider>
  );
};
