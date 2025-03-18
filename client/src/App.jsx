// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepNationLanding from './pages/LandingPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepNationLanding />} />
      </Routes>
    </Router>
  );
}

export default App;