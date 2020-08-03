import React, { useState } from "react";
export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");
  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);
  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-10 my-1">
          <input
            type="text"
            className="form-control col-sm-12"
            value={newTaskName}
            onChange={updateNewTaskValue}
          />
        </div>
        <div className="col-sm-12 col-md-2 my-1 ">
          <button className="col-12 btn btn-primary" onClick={createNewTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
