import React, { Fragment } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import styles from './App.module.css'



function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.airtable.com/v0/${
    import.meta.env.VITE_AIRTABLE_BASE_ID
  }/${import.meta.env.VITE_TABLE_NAME}`;
  console.log('url', url);

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

      const todos = data.records.map((todo) => {

        return { title: todo.fields.title, id: todo.id }
    });


      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }
console.log("todoListApp", todoList)
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", todoListString);
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };

  const onRemoveTodo = (id) => {
    const filteredTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredTodoList);
  };

  return (
    <div className={styles.container}>
    <h1>Todo List</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/"
        element={<>
        <AddTodoForm onAddTodo={addTodo} />

        <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo}/>
        </>}
        ></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
     
      
        
        

        {/* {isLoading ? (
          <p>"Loading"</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
        )} */}
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
