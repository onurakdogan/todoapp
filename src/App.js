import React, { useState } from 'react';

import "./App.css";

import data from "./data.json";
 
import Header from './Header';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';  
 

const App = () => {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(title => {
      return title.id == id ? { ...title, complete: !title.complete } : { ...title};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(title => {
      return !title.complete;
    });
    setToDoList(filtered);
  }

  const addtitle = (InputVal ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, title: InputVal, complete: false }];
    setToDoList(copy);
  }


  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addtitle={addtitle}/>
    </div>
  );
}

export default App;
