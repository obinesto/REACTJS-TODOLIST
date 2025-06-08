/* eslint-disable react/prop-types */

export default function TodoInput({ handleTodos, todoValue, setTodoValue }) {
  const handleInputData = (event) => {
        setTodoValue(event.target.value);
      };

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
