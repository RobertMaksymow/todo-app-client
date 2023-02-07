import { useState } from "react";
import { Todo_IF } from "../types";
import { updateTodo } from "../api/todoAPI";

interface Props {
  todos: Todo_IF[];
  setPriority: React.Dispatch<React.SetStateAction<Todo_IF[]>>;
}

// const SelectPriority: React.FC<Props> = ({ todos }) => {
const SelectPriority = (todo: any) => {
  const [priority, setPriority] = useState<number>();

  const handlePriorityChange = (event: any) => {
    setPriority(event.target.value);
    console.log(event.target.value);
    updateTodo({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      priority: priority,
    });
    console.log("Inside handle priority", todo);
  };

  return (
    <span className="priority-selector">
      <select
        value={priority}
        onChange={(event) => handlePriorityChange(event)}
      >
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>
      <label>priority</label>
    </span>
  );
};

export default SelectPriority;
