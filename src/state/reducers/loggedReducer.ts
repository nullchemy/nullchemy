type Action = {
  type: string
  payload?: boolean
}
const loggedReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case 'SETLOGGED':
      return action.payload
    default:
      return state
  }
}

export default loggedReducer
