export const TaskRow = ({task}) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
            type="checkbox"
            checked={task.done}    
        />
      </td>
    </tr>
  );
};

//quede en el minuto 54:00
