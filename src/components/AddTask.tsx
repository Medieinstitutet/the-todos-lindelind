import { ChangeEvent, useEffect, useState } from "react"

interface IAddTaskProps {
    addTask: (createdNewTask: string) => void;
}

export const AddTask = (props: IAddTaskProps) => {
    const [newTaskName, setNewTaskName] = useState("");
    
    const handleClick = (e) => {
        props.addTask(newTaskName);
        e.preventDefault();
        setNewTaskName("");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem("newTaskName", newTaskName);
    }, [newTaskName]);
    
    return (
      <>
        <form className="input-form">
          <input
            className="input-box"
            type="input"
            placeholder="Enter a task"
            value={newTaskName}
            onChange={handleChange}
          />
          <button className="input-button" onClick={handleClick}>
            Add
          </button>
          
        </form>
      </>
    );
}