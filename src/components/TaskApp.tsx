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

    return (
        <>
        <h3>TaskMaster</h3>
        <AddTask/>
        {tasks.map((task) =>{
            return <UpdateTask task={task} />;
        })}
        
        </>
    )
}