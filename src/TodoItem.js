import './TodoItem.css'

function TodoItem({ text, completed }) {
    return (
        <li className="todoItemContainer">
            <p className="todoItemCompleted">
                <span className={`${completed ? 'Icon-check Icon-check--active' : 'Icon-check'}`}> V</span>
            </p>
            <p className={`${completed ? 'TodoItem-p--complete' : ''}`}>{text}</p>
            <p className="todoItemDelete">X</p>
        </li>
    )
}

export { TodoItem }