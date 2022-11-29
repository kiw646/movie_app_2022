import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Test from './routes/Test'
// import tkdeks from './components/tkdeks';
function App() {
  return (
    <HashRouter>
      <Route path="/Test" component={Test}/>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/test" component={test}></Route> */}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
