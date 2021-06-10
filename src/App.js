import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./Components/NavBar";
import Footer from "./Components/Footer";
import Profile from "./routes/Profiles";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Services from "./routes/ServicesOffered";

function App() {
  return (
    <div className="App bg-gray-200">
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
