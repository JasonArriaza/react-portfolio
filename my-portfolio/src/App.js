import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route path="/" exact component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
