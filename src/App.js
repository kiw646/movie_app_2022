import React from 'react';
// import axios from 'axios';
// import Movie from './Movie';
import './App.css';
// import Home from './routes/Home';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      {/* <Routes> */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* </Routes> */}
    </HashRouter>
  );
}

export default App;
