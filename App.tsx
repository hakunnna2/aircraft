import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Navbar from './components/Navbar.tsx';
import ScrollToTopButton from './components/ScrollToTop.tsx';
import PasswordGate from './pages/PasswordGate.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const AircraftDetail = lazy(() => import('./pages/AircraftDetail.tsx'));
const QuizMenu = lazy(() => import('./pages/QuizMenu.tsx'));
const QuickChoice = lazy(() => import('./pages/QuickChoice.tsx'));
const MapView = lazy(() => import('./pages/MapView.tsx'));
const BookView = lazy(() => import('./pages/BookView.tsx'));
const FavoritesView = lazy(() => import('./pages/FavoritesView.tsx'));
const GameHistory = lazy(() => import('./pages/GameHistory.tsx'));
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
  const ACCESS_KEY = 'jp_access_granted';
  const REFRESH_KEY = 'jp_access_refreshes';
  const APP_PASSWORD = 'justplane';
  const [isUnlocked, setIsUnlocked] = useState(() => {
    const unlocked = sessionStorage.getItem(ACCESS_KEY) === 'true';
    if (!unlocked) return false;

    const count = Number(sessionStorage.getItem(REFRESH_KEY) ?? '0');
    if (count >= 5) {
      sessionStorage.removeItem(ACCESS_KEY);
      sessionStorage.setItem(REFRESH_KEY, '0');
      return false;
    }

    sessionStorage.setItem(REFRESH_KEY, String(count + 1));
    return true;
  });
  const [searchQuery, setSearchQuery] = useState('');

  if (!isUnlocked) {
    return (
      <ErrorBoundary>
        <PasswordGate
          accessKey={ACCESS_KEY}
          password={APP_PASSWORD}
          onSuccess={() => {
            sessionStorage.setItem(REFRESH_KEY, '0');
            setIsUnlocked(true);
          }}
        />
      </ErrorBoundary>
    );
  }

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
                <Route path="/quiz/history" element={<GameHistory />} />
                <Route path="/quiz/quick-choice" element={<QuickChoice />} />
                <Route path="/map" element={<MapView />} />
                <Route path="/book" element={<BookView />} />
                <Route path="/favorites" element={<FavoritesView />} />
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
