import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo, i }) => {
  console.log("todo", todo);
  return (
    <div className={styles.listItemDiv}>
      <li className={styles.ListItem} key={i}>
        <div className={styles.todoItem}>{todo.title}</div>
        <div className={styles.RemoveButtonDiv}>
          <button
            className={styles.removeButton}
            type="button"
            onClick={() => onRemoveTodo(todo.id)}
          >
            Remove
          </button>
        </div>
      </li>
    </div>
  );
};

TodoListItem.propTypes = {
  onRemoveTodo: PropTypes.func,
  i: PropTypes.number
}

export default TodoListItem;
