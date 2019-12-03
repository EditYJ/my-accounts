import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Create from "./containers/Create";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/">Home</Link> | 
          <Link to="/create">Create</Link> | 
          <Link to="/edit/55">Create-edit</Link>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Create} />
      </div>
    </Router>
  );
}

export default App;
