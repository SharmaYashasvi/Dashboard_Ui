import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Recurringinvoices';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
      <Router>
      <ColorModeSwitcher/>
          <Routes>
          <Route path='/' element = {<Dashboard/>}/>
          </Routes>
      </Router>
  );
}

export default App;
