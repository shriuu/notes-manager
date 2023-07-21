import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './Pages';
import Login from './Pages/login';
import Register from './Pages/register';
import Dashboard from './Pages/dashboard';
import Insertnotes from './Pages/insertnotes';
import Viewnotes from './Pages/viewnotes';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/insertnotes' element={<Insertnotes/>} />
        <Route path='/viewnotes' element={<Viewnotes/>} />

      </Routes>
    </Router>
  );
}

export default App;

