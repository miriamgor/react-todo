function AddTodoForm(props) {

    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log(e);
        let todoTitle = e.target.title.value;
        console.log("todoTitle", todoTitle);
        props.onAddTodo(todoTitle);
    }

    const handleClick = () => {
        props.onAddTodo("");

    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input name="title" id="todoTitle"  />
            <button onClick={handleClick}>Add</button>
        </form>
    );
}

export default AddTodoForm;