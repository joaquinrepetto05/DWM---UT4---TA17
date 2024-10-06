import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product/index.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;