import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm.jsx";
import { UpdateTaskForm } from "./components/UpdateTaskForm.jsx";
import { ToDo } from "./components/ToDo.jsx";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [color, setColor] = useState("");
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false, color: color };
      setToDo([...toDo, newEntry]);
      setNewTask("");
      setColor("");
    }
  };
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  const completedTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });

    // Sort the array based on the task's status
    newTask.sort((a, b) => {
      if (a.status === b.status) {
        return 0;
      }
      return a.status ? 1 : -1;
    });

    setToDo(newTask);
  };
  const cancelUpdate = () => {
    setUpdateData("");
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
      color:updateData.color,
    };
    setUpdateData(newEntry);
  };
  const updateTask = () => {
    let filtered = [...toDo].filter((task) => task.id !== updateData.id);
    let updated = [updateData, ...filtered];
    setColor(color);
    setToDo(updated);
    setUpdateData("");
  };
  return (
    <div className="container App">
      <h2>To Do List</h2>
      {/*Update*/}
      {updateData && updateData ? (
        <UpdateTaskForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          setColor={setColor}
          color={color}
        />
      )}

      {/*Add*/}

      {toDo && toDo.length ? "" : "No Tasks"}
      <ToDo
        toDo={toDo}
        completedTask={completedTask}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
