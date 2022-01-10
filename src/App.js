import React, { useState } from 'react';

import "./App.css";

import data from "./data.json";
 
import Header from './Header';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';  
 

const App = () => {
  
  const [ toDoList, settoDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(title => {
      return title.id === Number(id) ? { ...title, complete: !title.complete } : { ...title};
    });
    settoDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(title => {
      return !title.complete;
    });
    settoDoList(filtered);
  }

  const addTask = (InputVal ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, title: InputVal, complete: false }];
    settoDoList(copy);
  }


  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
