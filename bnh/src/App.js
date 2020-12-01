import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Wrapper>
          <Navbar />
          <Route exact path="/" component={Landing} />
        </Wrapper>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
