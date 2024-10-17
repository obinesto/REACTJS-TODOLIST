import { useState } from "react";

export default function TodoInput(props) {
  const { handleTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
