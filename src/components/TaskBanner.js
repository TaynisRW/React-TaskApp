import React from "react";
export const TaskBanner = (props) => (
  <h4 className="bg-primary text-white text-center p-4">
    {props.userName} Task APP (
    {props.taskItems.filter((taskTodo) => !taskTodo.done).length} task to do)
  </h4>
);
