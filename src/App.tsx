import React from 'react';
import List from "./components/list/list";

import logo from './logo.svg';
import Add from "./components/todo/components/add/add";

import './App.css';

function App() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const day = dd + '/' + mm + '/' + yyyy;

  return (
    <div className="App">
        <p>{day}</p>
        <Add/>
      <List/>
    </div>
  );
}

export default App;
