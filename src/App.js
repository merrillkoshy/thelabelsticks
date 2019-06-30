import React, {Component} from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import IndexPage from "./components/interviews/IndexPage";
import Home from "./components/home/Home";


class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/stars');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/stars/:id" component={IndexPage} />
        </BrowserRouter>
      );
    }
  }
  
  export default App;
/* function App() {
  {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/stars/:id" component={IndexPage} />
      </BrowserRouter>
    );
  }
}

export default App; */
