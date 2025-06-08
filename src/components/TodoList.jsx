/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
