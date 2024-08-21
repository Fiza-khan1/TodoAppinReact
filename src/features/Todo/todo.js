import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "./todoslice";

export function TodoComponent() {
  const [textVal, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if(textVal!==""){
    dispatch(AddTask({ text: textVal }));
    setText(""); 
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={textVal}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your task"
            />
            <button
              className="btn btn-primary"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
