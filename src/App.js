import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

function App() {
  return (
    <div className="App">
      <TodoCounter totalTodos={2} completedTodos={1} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

    </div>
  );
}

export default App;
