import React, { useState, useRef, useEffect } from "react";
import TodoList from "./component/TodoList";
import "./App.css";
import Quote from "./component/Quote";

const LS_key = "reactTodoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prev) => [
      { id: Math.random(), name: name, complete: false },
      ...prev,
    ]);
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LS_key));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_key, JSON.stringify(todos));
  }, [todos]);

  function handleDeleteCompleted() {
    const newTodos = todos.filter((t) => !t.complete);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <form className='top-input'>
            <input type="text" ref={todoNameRef} className="check" />
            <button className="add-button" onClick={handleAddTodo}>
              <h3>Add to do</h3>
            </button>
          </form>
        </div>

        <div className="list">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>

        <div className="bottom">
          <button className="delete-button" onClick={handleDeleteCompleted}>
            <h3>Delete completed</h3>
          </button>
          <h5>{todos.filter((t) => !t.complete).length} left to do</h5>
        </div>
      </div>
      <Quote />
    </div>
  );
}

export default App;
