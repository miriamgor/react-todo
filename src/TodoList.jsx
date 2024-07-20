import TodoListItem from "./TodoListItem";

const todoList = [
    {id: 1, title: "Wake up"},
    {
      id: 2,
      title: "Brush teeth"
    },
    {
      id: 3,
      title: "Eat breakfast"
    },
  ];

function TodoList() {
    return (
        <ul>
        {todoList.map((item) => {
          return (
            <TodoListItem key={item.id} todo={item}/>
          )
        })}
      </ul>

    );
}

export default TodoList;