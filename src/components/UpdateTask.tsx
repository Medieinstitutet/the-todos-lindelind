import { Task } from "../models/Task"

interface IUpdateTaskProps {
    task: Task;
}

export const UpdateTask = (props: IUpdateTaskProps) => {

    return (
        <>
        <p>{props.task.name} {props.task.isDone}</p>
        </>
    )
}