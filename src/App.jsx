import TaskCreator from "./components/TaskCreator";
import { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";

function App() {
  //useState que guarda un valor inicial y que se puede actualizar
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  //en react no se acostumbra a mutar valores (arreglos)
  //Es mejor usar operador rest linea 15
  //Se puede cambiar el orden para guardar antes o despues el nuevo valor
  function createNewTask(newTask) {
    if (!taskItems.find((task) => task.name === newTask)) {
      setTaskItems([...taskItems, { name: newTask, done: false }]);
    }
  }

  const toogleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  //cuando useEffect esta con ,[], solo se ejecutara un vez
  useEffect(() => {
    //.getItem(), para obtener la key y su valor del localStorage
    const data = localStorage.getItem("Tareas");
    setTaskItems(JSON.parse(data));
    console.log("data", data);
  }, []);

  //Este useEffect esta atento a algun cambio en taskItems
  useEffect(() => {
    //.setItem, recibe dos valores, una key(string) y valor
    //.stringify para cambiar a formato json
    localStorage.setItem("Tareas", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div>
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toogleTask={toogleTask} />

      <div>
        <input
          type="checkbox"
          onChange={() => setShowCompleted(!showCompleted)}
        />
        <label>Show Task Done</label>
      </div>
      {showCompleted && (
        <TaskTable
          tasks={taskItems}
          toogleTask={toogleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;

//quede en el minuto 1:01:34
