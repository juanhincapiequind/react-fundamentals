import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../components/data/task'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  function createTask(task) {
    setTask([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]);
  }

  useEffect(() => {
    setTask(data);
  }, []);


  return (
    <TaskContext.Provider
      value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
