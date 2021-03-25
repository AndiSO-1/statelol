import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Login
import Login from "./components/login";

// Layout
import Header from "./layouts/header";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />

        <Route path='/'>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
