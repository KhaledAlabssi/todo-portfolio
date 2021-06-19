import React, {useState} from "react";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name: 'todo 1', complete: false}
  ])


  return (
    <div className="App">
      <input type='text' />
      <button>Add to do</button>
      <TodoList todos={todos} />
      <button>Delete completed</button>
      <p>0 left to do</p>

      
    </div>
  );
}

export default App;
