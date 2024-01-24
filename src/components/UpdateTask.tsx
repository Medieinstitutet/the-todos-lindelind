import { Task } from "../models/Task"
import deleteimg from "../images/delete.png"

interface IUpdateTaskProps {
    task: Task;
    removetask: (name:string) => void;
}

export const UpdateTask = (props: IUpdateTaskProps) => {





    const clickRemove = () => {
        props.removetask(props.task.name)
    }

    return (
      <>
        <p>
          {props.task.name} {props.task.isDone}
          <img src={deleteimg} onClick={clickRemove} className="remove-button" alt = "remove task" />
        </p>
      </>
    );
}