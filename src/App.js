import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import HomePage from './views/index/index';
import PostDetail from './views/post/post-detail';

import './css/style.css';

function App() {
  return (
    <Router>      
      <Header/>    
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/post/:id" component={PostDetail} />
        </Switch>
      </div>      
      <Footer/>
    </Router>
  );
}

export default App;
