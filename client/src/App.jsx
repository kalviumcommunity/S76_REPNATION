// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepNationLanding from './pages/LandingPages';
import Exercises from './components/Exercises';  // Import the new Exercises component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepNationLanding />} />
        <Route path="/exercises" element={<Exercises />} />  {/* New route for exercises page */}
      </Routes>
    </Router>
  );
}

export default App;
