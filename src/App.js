import React, {useState, useRef, useEffect} from "react";
import TodoList from "./component/TodoList";

const LS_key = 'reactTodoApp.todos'
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo (e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prev => [{id: Math.random(), name: name, complete: false}, ...prev])

    todoNameRef.current.value = null

  }

  function toggleTodo (id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LS_key))
    if (storedTodos) setTodos(storedTodos)

  }, [])

  useEffect(() => {
    localStorage.setItem(LS_key, JSON.stringify(todos))

  }, [todos])

  function handleDeleteCompleted () {
    const newTodos = todos.filter(t => !t.complete)
    setTodos(newTodos)

  }


  return (
    <div className="App">
      <input type='text' ref={todoNameRef}/>
      <button onClick={handleAddTodo}>Add to do</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <button onClick={handleDeleteCompleted}>Delete completed</button>
      <p>{todos.filter(t => !t.complete).length} left to do</p>

      
    </div>
  );
}

export default App;
