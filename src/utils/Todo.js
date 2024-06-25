// this file will have the function to get the todos from the server
import axios from "axios";

const url = "http://localhost:3001/todos";

export async function createTodo(todo) {
  try {
    return await axios.post(url, todo);
  } catch (error) {
    console.error("Error adding todo to database: ", error);
  }
}

export async function getTodos(userId) {
  try {
    return await axios.get(`${url}?userId=${userId}`);
  } catch (error) {
    console.error("Error getting todos: ", error);
  }
}

export async function updateTodo(todo) {
  try {
    return await axios.put(`${url}/${todo.id}`, todo);
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
}

export async function deleteTodo(id) {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
}

export async function toggleCompletionTodo(todo) {
  try {
    return await axios.put(`${url}/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
  } catch (error) {
    console.error("Error toggling completion todo: ", error);
  }
}
