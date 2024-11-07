import React from "react";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.text} className="task">
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button className="delete" onClick={() => onDeleteTask(task.text)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

