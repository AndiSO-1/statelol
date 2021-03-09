import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Login
import Login from "./components/login";

// Layout
import Header from "./layouts/header";

// Pages
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />

        <Route path='/' exact>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
          </Switch>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
