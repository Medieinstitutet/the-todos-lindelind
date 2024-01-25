import { Task } from "../models/Task"
import deleteimg from "../images/delete2.png"

interface IUpdateTaskProps {
    task: Task;
    removetask: (name:string) => void;
    taskdone: (name:string) => void;
    taskundone: (name:string) => void;
}

export const UpdateTask = (props: IUpdateTaskProps) => {
  const handleCheckbox = () => {
    if (props.task.isDone) {
      props.taskundone(props.task.name);
    } else {
      props.taskdone(props.task.name);
    }
  };

  const clickRemove = () => {
    props.removetask(props.task.name);
  };

  return (
    <>
      <p className="task-container">
        <input
          className="input-checkbox"
          type="checkbox"
          checked={props.task.isDone}
          onChange={handleCheckbox}
        />

        <span className={`task-info ${props.task.isDone ? "done" : ""}`}>
          {props.task.name}{" "}
          <img
            src={deleteimg}
            onClick={clickRemove}
            className="remove-button"
            alt="remove task"
          />
        </span>
      </p>
    </>
  );
}