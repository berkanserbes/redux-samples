import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import styles from "./css/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
