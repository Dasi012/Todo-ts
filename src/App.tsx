import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export interface TodoData {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todo, setTodo] = useState<TodoData[]>([]);

  const newTodoHandler = (data: TodoData) => {
    setTodo([...todo, data]);
  };

  return (
    <div className="App">
      <TodoForm newTodoHandler={newTodoHandler} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
