export interface TodosApiResponse_IF {
  todos: Todo_IF[];
  setTodos: React.Dispatch<React.SetStateAction<Todo_IF>>;
}

export interface Todo_IF {
  id: number;
  title: string;
  priority?: Priority_EN;
  completed?: boolean;
}

enum Priority_EN {
  Low = 0,
  Medium = 1,
  High = 2,
}
