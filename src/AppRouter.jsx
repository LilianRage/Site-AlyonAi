import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default AppRouter;
