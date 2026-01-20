import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import ResearchPage from './pages/ResearchPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technologie" element={<TechnologyPage />} />
        <Route path="/recherche" element={<ResearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
