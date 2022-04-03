import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Projects from "./containers/Projects/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
      </Routes>
    </>
  );
};
export default App;
