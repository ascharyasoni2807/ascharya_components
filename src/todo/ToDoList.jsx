import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleUpdateTask = (id, newText) => {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    for (let i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === id) {
        updatedTasks[i].text = newText; // Update the text of the task with the matching id
        break; // Exit the loop once the task is updated
      }
    }
    setTasks(updatedTasks); // Update the state with the modified tasks array
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleUpdateTask(task.id, e.target.value)}
              />
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
