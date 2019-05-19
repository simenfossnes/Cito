import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalog from './screens/Catalog';
import CitoInfo from './screens/CitoInfo';
import NavBar from './compoments/_/organisms/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cito/:citoId" component={CitoInfo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
