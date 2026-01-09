import './TodoList.css'
function TodoList(props) {

    return (
        <ul className="todoListContainer">
            {props.children}
        </ul>
    )
}

export { TodoList }