import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Navbar from './components/Navbar.tsx';
import ScrollToTopButton from './components/ScrollToTop.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const AircraftDetail = lazy(() => import('./pages/AircraftDetail.tsx'));
const QuizMenu = lazy(() => import('./pages/QuizMenu.tsx'));
const QuickChoice = lazy(() => import('./pages/QuickChoice.tsx'));
const MapView = lazy(() => import('./pages/MapView.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Immediate scroll to top without delay and clear any hash
    window.scrollTo(0, 0);
    
    // Also scroll on initial load/refresh
    return () => {
      window.scrollTo(0, 0);
    };
  }, [pathname]);

  // Force scroll to top on component mount (page refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <div className="min-h-screen flex flex-col bg-slate-50">
          <Navbar onSearch={setSearchQuery} />
          
          <main className="flex-grow">
            <Suspense fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <span className="text-sm text-slate-500">Chargement…</span>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home searchQuery={searchQuery} />} />
                <Route path="/quiz" element={<QuizMenu />} />
                <Route path="/quiz/quick-choice" element={<QuickChoice />} />
                <Route path="/map" element={<MapView />} />
                <Route path="/aircraft/:id" element={<AircraftDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
      </div>
    </Router>
    </ErrorBoundary>
  );
};

export default App;
