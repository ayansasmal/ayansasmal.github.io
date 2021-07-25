import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};
export default App;
