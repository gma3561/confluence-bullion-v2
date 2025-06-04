import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
import PresentationPage from './components/PresentationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PresentationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;