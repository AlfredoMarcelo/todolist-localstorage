import TaskCreator from "./components/TaskCreator";
import { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";

function App() {
  //useState que guarda un valor inicial y que se puede actualizar
  const [taskItems, setTaskItems] = useState([]);

  //en react no se acostumbra a mutar valores (arreglos)
  //Es mejor usar operador rest linea 15
  //Se puede cambiar el orden para guardar antes o despues el nuevo valor
  function createNewTask(newTask) {
    if (!taskItems.find((task) => task.name === newTask)) {
      setTaskItems([...taskItems, { name: newTask, done: false }]);
    }
  }

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
      <TaskTable tasks={taskItems} />
    </div>
  );
}

export default App;
