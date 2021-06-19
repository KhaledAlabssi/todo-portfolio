import React, {useState} from "react";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <input type='text' />
      <button>Add to do</button>
      <TodoList />
      <button>Delete completed</button>
      <p>0 left to do</p>

      
    </div>
  );
}

export default App;
