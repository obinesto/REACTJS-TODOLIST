/* eslint-disable react/prop-types */

export default function TodoInput({ handleTodos, todoValue, setTodoValue }) {
  const handleInputData = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      return;
    }
    setTodoValue(inputValue);
  }

  return (
    <header>
      <input
        value={todoValue}
        onChange={handleInputData}
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          if (todoValue.trim() === "") {
            return;
          }
          handleTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
