import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className={styles.todoListDiv}>
      <ul>
        {todoList.map((item, i) => {
          return (
            <TodoListItem key={i} todo={item} onRemoveTodo={onRemoveTodo} />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
