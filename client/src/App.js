import './App.css';
import React from "react";
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import {Customers} from './pages/Customers';
import Accounts from './pages/Accounts';
import Contests from './pages/Contest';
import Navigation from './components/Navigation';

function App() {


  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Customers/>} exact/>
          <Route path="/accounts/:customerid" element={<Accounts/>}/>
          <Route path="/contests" element={<Contests/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
