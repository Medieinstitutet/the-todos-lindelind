import { useState, useEffect } from "react";
import { Task } from "../models/Task";
import { UpdateTask } from "./UpdateTask";
import { AddTask } from "./AddTask";
import filterimg from "../images/filterblue.png";

export const TaskApp = () => {
  const initialTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState<Task[]>(
    initialTasks ? JSON.parse(initialTasks):
       [
          new Task("Do laundry", false),
          new Task("Vacuum the house", false),
          new Task("Take out the trash", false),
          new Task("Walk the dog", true),
          new Task("Buy Groceries", false),
        ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const markAsDone = (name: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.name === name) {
          return { ...task, isDone: true };
        } else {
          return task;
        }
      })
    );
  };

  const markUnDone = (name: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.name === name) {
          return { ...task, isDone: false };
        } else {
          return task;
        }
      })
    );
  };

  const addANewTask = (createdNewTask: string) => {
    setTasks([...tasks, new Task(createdNewTask, false)]);
  };

  const removeTask = (name: string) => {
    setTasks(tasks.filter((task) => task.name !== name));
  };

  const sortByDone = () => {
    setTasks(
      [...tasks].sort((taskA, taskB) =>
        taskA.isDone === taskB.isDone ? 0 : taskA.isDone ? 1 : -1
      )
    );
  }

  return (
    <>
      <h1>TaskMaster</h1>
      <AddTask addTask={addANewTask} />
      {tasks.map((task) => (
        <UpdateTask
          task={task}
          taskdone={markAsDone}
          taskundone={markUnDone}
          removetask={removeTask}
          key={task.name}
        />
      ))}
      
      <img src={filterimg}className="sort-button" onClick={sortByDone}/>
    </>
  );
};
