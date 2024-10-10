import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) { 
  console.log("todoList",todoList) ;
  return (
    
    <div className={styles.todoListDiv}>      
      <ul className={styles.ulElement}>
        {todoList.map((item, i) => {
          return (
            <TodoListItem
              key={i}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList;
