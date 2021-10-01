// import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Checked, Delonly } from "../store/todos/action"
export const TasksList = (props) => {
  const dispatch = useDispatch()
  const Task = props.Task

  console.log("Tasks", Task)
  return (
    <div>
      {Task.map((el, index) => {
        return (
          <div className="TodoLine" key={index}>
            <h3 className="TodoLine_title" >{el.text}</h3>
            <div>
              <input
                onChange={(e) => {
                  dispatch(Checked({ check: e.target.value, id: el.id }))
                }}
                className="TodoLine_checked"
                type="checkbox" />
              <button onClick={() => {
                dispatch(Delonly(el.id))
              }}
                style={{ marginTop: "-10px" }}
                className="btn btn-danger">X</button>

            </div>

          </div>
        )
      })}
    </div>
  )
}