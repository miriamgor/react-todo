import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState([]);

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <div className={styles.formDiv}>
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      ></InputWithLabel>
      <button className={styles.addTodoButton}>Add</button>
    </form>
    </div>
  );
}

export default AddTodoForm;
