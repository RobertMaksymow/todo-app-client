import "./App.css";
import { useEffect, useState } from "react";
import { loadTodos, createTodo } from "./api/todoAPI";
import { Todo_IF, TodosApiResponse_IF } from "./types";

import BasicExample from "./components/BasicExample";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo_IF[]>([]);

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), title: todo, completed: false }]);
      setTodo("");
      createTodo({ id: Date.now(), title: todo, completed: false });
    }
  };

  useEffect(() => {
    loadTodos().then((data) => {
      console.log(data);
      setTodos(data);
    });
  }, []);

  console.log(todo);
  console.log("TODOS", todos);
  return (
    <div className="App">
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <BasicExample />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
