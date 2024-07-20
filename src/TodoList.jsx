import React from "react";

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
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>

    );
}

export default TodoList;