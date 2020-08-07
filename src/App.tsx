import React from 'react';
import List from "./components/list/list";

import logo from './logo.svg';
import Add from "./components/todo/components/add/add";

import './App.css';
import getCurrentDay from "./services/utils/getCurrentDay";
function App() {


  return (
    <div className="App">
        <h1>TodoList</h1>
        <p>{getCurrentDay()}</p>
        <Add/>
      <List/>
    </div>
  );
}

export default App;
