import React from 'react';

const Form = (props) => {

    const {value, appTodo, todoList} = props

    return (
        <form  onSubmit={todoList}>
            <input  type="text" value={value} onChange={appTodo}/>
            <button type="submit" alt="Add task">Add</button>
        </form>
    );
}

export default Form;