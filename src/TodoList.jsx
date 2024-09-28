import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className={styles.todoListDiv}>
      <ul className={styles.ulElement}>
        {todoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
