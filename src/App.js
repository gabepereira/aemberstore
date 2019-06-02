import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path = '/' component = { Main } />
      </Switch>
    </BrowserRouter>
  );
}

const Main = () => (
  <div className = 'App'>
    <Header />
    <Routes />
  </div>
);

export default App;