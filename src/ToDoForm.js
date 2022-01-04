import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ InputVal, setInputVal ] = useState('');

    const handleChange = (e) => {
        setInputVal(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(InputVal);
        setInputVal("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={InputVal} type="text" onChange={handleChange} placeholder="Please Enter Task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;