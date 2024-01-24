import { Task } from "../models/Task"
import deleteimg from "../images/delete.png"

interface IUpdateTaskProps {
    task: Task;
    removetask: (name:string) => void;
    taskdone: (name:string) => void;
    taskundone: (name:string) => void;
}

export const UpdateTask = (props: IUpdateTaskProps) => {

    const clickDone = () => {
        props.taskdone(props.task.name)
    }

     const clickUndone = () => {
       props.taskundone(props.task.name);
     };


    const clickRemove = () => {
        props.removetask(props.task.name)
    }

    return (
      <>
        <p className = {props.task.isDone ? "done" : ""}> {props.task.name} 
        <button onClick={clickDone}>Done</button> 
        <button onClick={clickUndone}>Undone</button>
          <img
            src={deleteimg}
            onClick={clickRemove}
            className="remove-button"
            alt="remove task"
          />

        </p>
      </>
    );
}