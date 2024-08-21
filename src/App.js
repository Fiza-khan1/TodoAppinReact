import './App.css';
import { TodoComponent } from './features/Todo/todo';
import TodoList from './features/Todo/todolist';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function App() {
  return (
    <div className="App" >
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center mb-4">Todo App</h1>
            <TodoComponent />  
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
