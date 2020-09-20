import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Redirects from './pages/Redirects';
import OnOffProvider from './context/OnOff'
import Context from './pages/Context'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Redirects />
      </Route>
      <Route path="/contextHook">
        <OnOffProvider>
          <Context />
        </OnOffProvider>
      </Route>
    </BrowserRouter>
  );
}

export default App;
