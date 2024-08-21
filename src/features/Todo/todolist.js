import { useSelector, useDispatch } from "react-redux";
import { EditTask, RemoveTask } from "./todoslice";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function TodoList() {
  const Todos = useSelector((state) => state.todoStore.todos);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center">Todo List</h2>
      {Todos.length === 0 ? (
        <p className="text-muted text-center">No tasks available</p>
      ) : (
        <ul className="list-group">
          {Todos.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.task}
              <div>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => dispatch(RemoveTask({ id: item.id }))}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => dispatch(EditTask({ id: item.id }))}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
