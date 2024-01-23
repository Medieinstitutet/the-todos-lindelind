import { useState } from "react"
import { Task } from "../models/Task"
import { UpdateTask } from "./UpdateTask";
import { AddTask } from "./AddTask";

export const TaskApp = () => {
    const [tasks, setTasks] = useState<Task[]>([
      new Task("Do laundry", false),
      new Task("Vacuum the house", false),
      new Task("Take out the trash", false),
      new Task("Walk the dog", false),
      new Task("Buy Groceries", false),
    ]);

    const addTask = (createdNewTask: string) => {
        setTasks([...tasks, new Task(createdNewTask, false)])
    }



    const removeTask = (name: string) => {
      setTasks(tasks.filter((task) => task.name !== name));
    };

    return (
        <>
        <h1>TaskMaster</h1>
        <AddTask addTask={addTask}/>
        {tasks.map((task) =>{
            return  <UpdateTask task={task} removetask={removeTask} />;
        })}
        
        </>
    )
}