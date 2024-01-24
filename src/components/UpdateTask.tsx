import { Task } from "../models/Task"

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
          <button className="remove-button" onClick={clickRemove}>
            Delete
          </button>
        </p>
      </>
    );
}