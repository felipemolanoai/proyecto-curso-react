function TodoCounter(props) {
    return (
        <h1>Has compleatado {props.completedTodos} Tareas de {props.totalTodos}</h1>
    )
}

export { TodoCounter }