import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div 
           key={todo.id + todo.task}
           id={todo.id}  
           name="todo" value={todo.id} 
           onClick={handleClick} 
           className={todo.complete ? "todo strike" : "todo"}
        >
           {todo.title}
        
        </div>
    );
};

export default ToDo;