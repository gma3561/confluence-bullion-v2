import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import PresentationPage from './components/PresentationPage';
import SimpleTest from './components/SimpleTest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '10px', zIndex: 9999}}>
          테스트: 컨플루언스 불리온 사업 개요
        </div>
        <Routes>
          <Route path="/" element={<SimpleTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;