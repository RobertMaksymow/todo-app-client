import { Todo_IF, TodosApiResponse_IF } from "../types";

const baseurl = "/api/todos";

export const loadTodos = () => {
  const data = fetch(baseurl, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export const createTodo = (todo: Todo_IF) => {
  return fetch(baseurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }),
  }).then((response) => response.json());
};

// export const getTodo = (id) => {
//   return fetch(`${baseurl}/${id}`).then((response) => response.json());
// };

export const updateTodo = (todo: Todo_IF) => {
  return fetch(`${baseurl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }),
  }).then((response) => response.json());
};

export const deleteTodo = (id: number) => {
  return fetch(`${baseurl}/${id}`, {
    method: "DELETE",
  }).then((response) =>
    response.json().catch((error) => {
      console.log(error);
    })
  );
};
