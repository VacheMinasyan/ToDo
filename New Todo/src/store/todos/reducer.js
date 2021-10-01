import types from "./types"

const Todo = {
  todo: [
    {
      text: "Learn Java",
      checked: false,
      id: Math.random(),
    },
    {
      text: "Learn React",
      checked: false,
      id: Math.random(),
    }, {
      text: "Learn Html",
      checked: false,
      id: Math.random(),
    },



  ]
}


const todos = (state = Todo, option) => {
  switch (option.type) {
    case types.ADD_TODOS:
      console.log("option", option)
      state.todo.push({ ...option.payload })
      return state
    case types.CHECKED:
      // console.log("option", option.payload)
      const user = state.todo.find(el => el.id === option.payload.id)
      console.log("user", user)
      user.checked = option.payload.check
      return state
    case types.DEL:
      // console.log("option", option.payload)
      state.todo = state.todo.filter(el => el.checked === false)
      return state
    case types.DEL2:
      // console.log("option", option.payload)
      state.todo = state.todo.filter(el => el.id !== option.payload)
      return state
    
    default:
      return state
  }
}
export default todos;