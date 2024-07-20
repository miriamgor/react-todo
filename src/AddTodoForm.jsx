import { useState } from "react";

function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = useState([]);

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        console.log(e.target.value);
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log("todoTitle", todoTitle);
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange}/>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;