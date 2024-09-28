import React, { Fragment } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from './App.module.css'

const url = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => [
        { title: todo.fields.title, id: todo.id },
      ]);

      setTodoList([...todoList, todos]);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const onRemoveTodo = (id) => {
    const newArray = todoList.filter((item) => item.id !== id);
    setTodoList(newArray);
  };

  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
      <div 
      className={styles.container}
      >
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? (
          <p>"Loading"</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
        )}
      </div>
    </Router>
  );
}

export default App;
