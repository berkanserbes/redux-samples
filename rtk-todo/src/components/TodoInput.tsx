import React, { useState } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import styles from "../css/TodoInput.module.css";

const TodoInput: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const addTodoHandler = () => {
    dispatch({ type: "todos/add", payload: input.trim() });
    setInput("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.todoInput}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Yeni bir görev ekleyin..."
      />
      <button className={styles.addButton} onClick={addTodoHandler}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
