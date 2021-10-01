import types from "./types"

export const AddTodos = (data) => {
  console.log("data", data)
  return {
    type: types.ADD_TODOS,
    payload: data
  }
}


export const Checked = (data) => {
  console.log("data", data)
  return {
    type: types.CHECKED,
    payload: data
  }
}
export const Delonly = (data) => {
  console.log("data", data)
  return {
    type: types.DEL2,
    payload: data
  }
}
export const Del = (data) => {
  console.log("data", data)
  return {
    type: types.DEL,
  }
}
