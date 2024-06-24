// this file will have the function to get the todos from the server
import axios from "axios";

const url = "http://localhost:3001/todos";

export async function getTodos(userId) {
  return await axios.get(`${url}?userId=${userId}`);
}

export async function deleteTodo(id) {
  return await axios.delete(`${url}/${id}`);
}

export async function updateTodo(todo) {
  return await axios.put(`${url}/${todo.id}`, todo);
}

export async function createTodo(todo) {
  return await axios.post(url, todo);
}

export async function toggleCompletionTodo(todo) {
  return await axios.put(`${url}/${todo.id}`, {
    ...todo,
    completed: !todo.completed,
  });
}
