import React from 'react'

export default function Todo( {todo, toggleTodo}) {

    function handleTodoClick () {
        toggleTodo(todo.id)
    }
    return (
        <div className='item'>
            <label>
                <input type='checkbox' checked={todo.complete} 
                onChange={handleTodoClick}/>
                <h3>{todo.name}</h3>
            </label>
            
        </div>
    )
}
