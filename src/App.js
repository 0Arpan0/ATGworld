import React from 'react';
import './App.css';
import Landing from '../src/component/Landing';
import Login from './modals/Login';

function App() {
  return (
    <div className="App">
      <Landing />
      <Login />
    </div>
  );
}

export default App;
