import React, {Component} from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import IndexPage from "./components/interviews/IndexPage";
import Home from "./components/home/Home";
import axios from "axios";

class App extends Component {
  state = {
      data: null,
      mongoData:[]
    };
  
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    getDataFromDb = () => {
      fetch('http://localhost:3001/server/data')
        .then((mongoData) => mongoData.json())
        .then((res) => this.setState({ mongoData: res.mongoData }));
    };

    putDataToDB = (message) => {
      let currentIds = this.state.mongoData.map((mongoData) => mongoData.id);
      let idToBeAdded = 0;
      while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
      }
  
      axios.post('http://localhost:3001/server/data', {
        id: idToBeAdded,
        message: message,
      });
    };

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
          <Route path="/stars/:id" component={IndexPage} />
          <Route exact path="/" component={Home} />
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
