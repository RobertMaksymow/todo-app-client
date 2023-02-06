import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone, MdOutlineRemoveDone } from "react-icons/md";
import "./TodoItem.css";
import { Todo_IF } from "../types";
import { updateTodo, deleteTodo } from "../api/todoAPI";
import { useEffect, useRef, useState } from "react";
import SelectPriority from "./SelectPriority";

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
    deleteTodo(todo.id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditText = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    console.log(">>>>>> SET TODOS", todo.title);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editTodo } : todo
      )
    );
    setEdit(false);
    updateTodo({ id: id, title: editTodo, completed: false });
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
            className="todos__single--text"
            ref={inputRef}
            value={editTodo}
            onChange={(event) => setEditTodo(event.target.value)}
          />
        ) : todo.completed ? (
          <s className="todos__single--text">
            # {todo.id}, {todo.title}
          </s>
        ) : (
          <span className="todos__single--text">
            # {todo.id}, {todo.title}
          </span>
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
            <AiOutlineDelete />
            delete_
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            {todo.completed === true ? (
              <MdOutlineRemoveDone />
            ) : (
              <MdOutlineDone />
            )}
            done_
          </span>
          <span className="icon">
            <SelectPriority />
          </span>
        </div>
      </form>
      {console.log("Here are single todos: ", todo)}
    </>
  );
};

export default TodoItem;
