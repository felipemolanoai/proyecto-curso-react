import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Tarea #1', completed: true },
  { text: 'Tarea #2', completed: false },
  { text: 'Tarea #3', completed: true },
  { text: 'Tarea #4', completed: false },
]

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0', padding: '0 16px' }}>
      <TodoCounter completedTodos={1} totalTodos={4} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}

export default App;
