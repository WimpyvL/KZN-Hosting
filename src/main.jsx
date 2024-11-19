import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import HomePage from './components/HomePage';
    import BrandShowcase from './components/BrandShowcase';
    import './index.css';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<BrandShowcase />} />
          </Routes>
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
