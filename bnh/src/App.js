import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
