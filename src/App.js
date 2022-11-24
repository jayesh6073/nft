import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage";
import Mint from "./component/mint/Mint";
import Portfolio from "./component/portfolio/Portfolio";
// import MintForm from "./component/mint/MintForm";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/mint" component={Mint} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
