import React from 'react'
import Header from './Components/Header.js'
import { Route, Switch } from "react-router-dom";
import RankingsCategories from './Components/RankingsCategories';
import PrefCategories from './Components/PrefCategories';

function App() {
  return (
  <div >
    <h1 className="App-title">The ideal state</h1>
    <Header />
      <Switch>
        <Route path="/rankings">
          <RankingsCategories />
        </Route>
        <Route path="/preferences">
          <PrefCategories />
        </Route>
      </Switch>
  </div>
);
}

export default App;
