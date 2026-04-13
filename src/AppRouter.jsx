import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import ResearchPage from './pages/ResearchPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technologie" element={<TechnologyPage />} />
        <Route path="/recherche" element={<ResearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
