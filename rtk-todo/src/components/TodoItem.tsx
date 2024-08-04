import React from "react";
import { useAppDispatch } from "../redux/app/hooks";
import { remove, toggle } from "../redux/app/features/todos/todosSlice";
import styles from "../css/TodoItem.module.css";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.todoItem}>
      <span
        className={`${styles.todoText} ${
          todo.completed ? styles.completed : ""
        }`}
        onClick={() => dispatch(toggle(todo.id))}
      >
        {todo.title}
      </span>
      <button
        className={styles.removeButton}
        onClick={() => dispatch(remove(todo.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
