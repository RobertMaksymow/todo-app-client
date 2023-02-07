import { Todo_IF } from "../types";

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
      // priority: (todo.priority = 3),
      priority: todo.priority,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      console.log("CREATED TODO: ", todo);
    });
};

export const updateTodo = (todo: Todo_IF) => {
  console.log("UPDATE TODO: ", todo);
  return fetch(`${baseurl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      priority: todo.priority,
    }),
  }).then((response) => response.json());
};

export const deleteTodo = (id: number) => {
  return fetch(`${baseurl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => {
      console.log(error);
    });
};
