import React from "react";
import "./App.css";
import Nav from "../src/components/Nav/Nav";
import routes from "./routes";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route component={Nav}></Route>
        {routes}
      </div>
    );
  }
}

export default App;
