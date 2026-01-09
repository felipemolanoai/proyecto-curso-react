function TodoCounter({ completedTodos, totalTodos }) {

    return (
        <h1 style={{ color: '#000000', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', height: '48px', margin: '16px', backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '16px', width: '60%' }}>
            Has completado {completedTodos} de {totalTodos} tareas
        </h1>
    )
}

export { TodoCounter }