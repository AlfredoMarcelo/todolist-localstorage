export const TaskRow = ({task,toogleTask}) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
            type="checkbox"
            checked={task.done}
            onChange={() => toogleTask(task)}
        />
      </td>
    </tr>
  );
};

//quede en el minuto 54:00
