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
  return (
    <BrowserRouter>
      <NavBarTv />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
