import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './components/layouts/header';
import Footer from './components/layouts/footer';

import HightLight from './components/index/highlight-sliders';
import LayoutLeftToRight from './components/layouts/layout-column--left-to-right';

import './css/style.css';

function App() {
  return (
    <Router>      
      <Header/>    
      <div className="App">
        <HightLight/>
        <LayoutLeftToRight/>
      </div>      
      <Footer/>
    </Router>
  );
}

export default App;
