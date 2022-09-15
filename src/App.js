import React from 'react'
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";
import LifeExpectancy from './Components/LifeExpectancy';
import LivingCost from './Components/LivingCost';
import Temperature from './Components/Temperature';
import WeedLaws from './Components/WeedLaws';


function App() {
  return (
  <div >
    <h1 className="App-title">State Rankings</h1>
    <NavBar />
      {/* <Header /> */}
        <Switch>
          <Route path="/marijunalaws">
            <WeedLaws />
          </Route>
          <Route path="/temperature">
           <Temperature />
          </Route>
          <Route path="/livingcost">
            <LivingCost />
          </Route>
          <Route path="/life">
            <LifeExpectancy />
          </Route>
        </Switch>
  </div>
);
}

export default App;
