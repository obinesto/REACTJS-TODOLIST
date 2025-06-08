import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleData (newData) {
    localStorage.setItem("todos", JSON.stringify({todos:newData}))
  }

  function handleTodos(newTodo) {
    const newTTodoList = [...todos, newTodo];
    handleData(newTTodoList)
    setTodos(newTTodoList);
  }

  function handleDeleteTodo(indexToDelete) {
    const newTodoList = todos.filter((_todo, currentIndex) => {
      return currentIndex !== indexToDelete;
    });
    handleData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditTodo(todoIndex) {
    const valueToBeEdited = todos[todoIndex];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(todoIndex);
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }
    let localTodos = localStorage.getItem("todos");
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleTodos={handleTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
