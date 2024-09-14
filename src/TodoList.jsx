import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  console.log("todoList on TodoList", todoList);
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
}

export default TodoList;
