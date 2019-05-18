import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalog from './screens/Catalog';
import Cito from './screens/Cito';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cito/:citoId" component={Cito} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
