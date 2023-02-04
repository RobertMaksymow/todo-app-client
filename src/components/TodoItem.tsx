import { Todo_IF, TodosApiResponse_IF } from "../types";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone, MdOutlineRemoveDone } from "react-icons/md";
import "./TodoItem.css";
import TodoList from "./TodoList";
import { useEffect, useRef, useState } from "react";

type Props = {
  todo: Todo_IF;
  todos: Todo_IF[];
  setTodos: React.Dispatch<React.SetStateAction<Todo_IF[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.title);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // CALL FUNCTION TO CHANGE/UPDATE 'completed' field on databasse HERE
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // CALL FUNCTION TO DELETE FROM databasse HERE
  };

  const handleEditText = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form
        className="todos__single"
        onSubmit={(event) => handleEditText(event, todo.id)}
      >
        {edit ? (
          <input
            className="todos_single--text"
            ref={inputRef}
            value={editTodo}
            onChange={(event) => setEditTodo(event.target.value)}
          />
        ) : todo.completed ? (
          <s className="todos__single--text">{todo.title}</s>
        ) : (
          <span className="todos__single--text">{todo.title}</span>
        )}

        <div>
          <span className="icon"></span>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.completed) {
                setEdit(!edit);
              }
            }}
          >
            <FiEdit />
            edit_
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            {" "}
            <AiOutlineDelete />
            delete_
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdOutlineDone /> <MdOutlineRemoveDone />
            completed_
          </span>
          <span className="icon">priority_</span>
        </div>
      </form>
      <p>
        # {todo.id}, {todo.title} {todo.completed}
      </p>
      {console.log("HERE", todo)}
    </>
  );
};

export default TodoItem;
