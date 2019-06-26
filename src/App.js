import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import IndexPage from "./components/interviews/IndexPage";
import Home from "./components/home/Home";

function App() {
  {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/stars/:id" component={IndexPage} />
      </BrowserRouter>
    );
  }
}

export default App;
