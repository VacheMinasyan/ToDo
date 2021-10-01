import { useDispatch, useSelector } from "react-redux"
import { Del } from "../store/todos/action"

export const TodoFooter = () => {
  const Tasks = useSelector(({ Todo }) => Todo.todo)
  const check = Tasks.filter(el => el.checked === true)
  console.log(Tasks.length)
  const dispatch = useDispatch()

  let Completed = check.length;
  return (
    <div>
      <div className="ToDoFooter">
        <span className="footerTitle"> Is Completed {Completed} / {Tasks.length}</span>
        <button onClick={() => {
          dispatch(Del())
        }} className="btn btn-danger">Delete </button>
      </div>
    </div>
  )

}