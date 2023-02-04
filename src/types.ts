export interface TodosApiResponse_IF {
  todos: Todo_IF[];
  setTodos: React.Dispatch<React.SetStateAction<Todo_IF>>;
}

export interface Todo_IF {
  id: number;
  title: string;
  priority?: Priority;
  completed?: boolean;
}

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
