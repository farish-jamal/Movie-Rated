import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Container } from "@material-ui/core";
import "./App.css";
import NavBarTv from "./components/NavBarTv";
import SimpleBottomNavigation from "./components/NavFooter";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Trending from "./components/pages/Trending";
import Movies from "./components/pages/Movies";
import Series from "./components/pages/Series";
import Search from "./components/pages/Search";

function App() {
  const [progress, setProgress] = useState(20);
  return (
    <BrowserRouter>
      <NavBarTv />
      <LoadingBar color="#3f51b5" progress={progress} height={4} />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/">
              <Trending setProgress={setProgress} />
            </Route>
            <Route path="/movies">
              <Movies setProgress={setProgress} />
            </Route>
            <Route path="/series">
              <Series setProgress={setProgress}/>
            </Route>
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
