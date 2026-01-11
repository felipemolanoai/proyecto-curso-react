import './App.css';
import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Tarea #1', completed: true },
  { text: 'Tarea #2', completed: false },
  { text: 'Tarea #3', completed: true },
  { text: 'Tarea #4', completed: true },
  { text: 'felipe', completed: true },
  { text: 'FELIPE MOLANO', completed: true },
]

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // const [serchedTodos,setSerchedTodos]= React.useState([])
  const serchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );


  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {serchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}

export default App;
