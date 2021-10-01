import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTodos } from "../store/todos/action"
import { TasksList } from "./TasksList"
export const TodoBody = () => {
  const [text, setText] = useState("")
  const Tasks = useSelector(({ Todo }) => Todo.todo)
  console.log(Tasks)
  const dispatch = useDispatch()
  console.log(text, "text")
  return (
    <div>
      <div className="WriteContainer">
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="TextWrite form-control" name="" id="" />
        <button
          onClick={() => {
            dispatch(AddTodos({ text: text, checked: false, id: Math.random() }))
            setText("")
          }}
          className="AddButton btn btn-primary">Submit</button>
      </div>
      <TasksList Task={Tasks} />
    </div>
  )

}