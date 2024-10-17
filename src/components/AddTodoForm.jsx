import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import * as styles from "./AddTodoForm.module.css";
import PropTypes from "prop-types";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

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
        >
          Title:{" "}
        </InputWithLabel>
        <button className={styles.addTodoButton}>Add</button>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
