import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export function useTodos() {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: todoId,
    })
  }

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: todoId,
    })
  }

  return {
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length
  }
}

