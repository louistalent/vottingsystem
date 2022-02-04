import "bootstrap/dist/css/bootstrap.css";
import './assets/rabbit/css2.css';
import './app.css';

// *
import Home from "./components/Home";
// boss
import Add from "./components/boss/add";
import Registers from "./components/boss/registers";
import Access from "./components/boss/access";
import Lazyboys from "./components/boss/lazyboys";
// member
import Registry from "./components/member/registry";
import Proposal from "./components/member/proposal";
import Voting from "./components/member/voting";
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  return (
    // React Router
    <div>
      <BrowserRouter forceRefresh={false}>
        <Switch>
          <Route path="/bossadd" component={Add}></Route>
          <Route path="/bossaccess" component={Access}></Route>
          <Route path="/bossregisters" component={Registers}></Route>
          <Route path="/bosslazyboys" component={Lazyboys}></Route>

          <Route path="/mregistry" component={Registry}></Route>
          <Route path="/mproposal" component={Proposal}></Route>
          <Route path="/mvoting" component={Voting}></Route>
          <Route path="*" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
