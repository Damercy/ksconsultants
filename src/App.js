import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Body from './Components/Body';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profiles';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/ServicesOffered';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/" exact>
              <Body />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
