import { TodoBody } from "../containers/TodoBody"
import { TodoFooter } from "../containers/TodoFooter"
import { TodoHeader } from "../containers/TodoHeader"

const Todo = () => {
  return (
    <div className="Parent">
      <div className="TodoContainer">
        <TodoHeader />
        <TodoBody />
        <TodoFooter />

      </div>
    </div>
  )
}

export default Todo