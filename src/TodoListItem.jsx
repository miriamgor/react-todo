const TodoListItem = (props) => {
    return (
        <li key={props.id}>{props.todo.title}</li>
    )
}

export default TodoListItem;