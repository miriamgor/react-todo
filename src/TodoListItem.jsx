import styles from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div className={styles.listItemDiv}>
      <li className={styles.ListItem}>
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

export default TodoListItem;
