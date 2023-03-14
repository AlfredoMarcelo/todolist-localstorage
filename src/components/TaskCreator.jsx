import React from "react";
import { useState } from "react";

const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    createNewTask(newTaskName)
    console.log('newTaskName', newTaskName)
    setNewTaskName("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="App">
        <input
          type="text"
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
          value={newTaskName}
        />
        <button>Save task</button>
      </div>
    </form>
  );
};

export default TaskCreator;
