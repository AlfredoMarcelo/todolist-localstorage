import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toogleTask, showCompleted = false}) => {

  function TaskTableRows(doneValue){
    return(
      tasks
      .filter(task => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toogleTask={toogleTask} />
      ))
    )
  }



  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
          TaskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
};

export default TaskTable;
