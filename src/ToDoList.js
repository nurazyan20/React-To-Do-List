import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div><center>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '10px'}} onClick={handleFilter}>Clear Completed Task</button>
            </center></div>
    );
};

export default ToDoList;