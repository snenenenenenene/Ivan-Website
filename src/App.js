import "./App.scss";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Zerostarter from "./components/Programs/Zerostarter";
import Navbar from "./components/Navbar";
import Krachttraining from "./components/Programs/Krachttraining";
import CrawlInstructie from "./components/Programs/CrawlInstructie";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/zerostarter" component={Zerostarter}></Route>
          <Route exact path="/kracht" component={Krachttraining}></Route>
          <Route exact path="/crawl" component={CrawlInstructie}></Route>
          <Route path="/*" component={Home}></Route>
        </Switch>
          </div>
    </HashRouter>
  );
}

export default App;
