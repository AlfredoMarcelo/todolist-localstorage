import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toogleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} toogleTask={toogleTask} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
