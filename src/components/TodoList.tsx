import "./TodoList.css";
import TodoItem from "./TodoItem";
import { Todo_IF } from "../types";

interface Props {
  todos: Todo_IF[];
  setTodos: React.Dispatch<React.SetStateAction<Todo_IF[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      <div className="todos">
        {todos.map((todo) => (
          <li>
            <TodoItem
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
            />
          </li>
        ))}
      </div>
    </>
  );
};

export default TodoList;
