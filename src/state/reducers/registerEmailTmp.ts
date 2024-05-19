type Action = {
  type: string
  payload?: string
}
const emailReducer = (state: string = '', action: Action) => {
  switch (action.type) {
    case 'SETEMAIL':
      return action.payload
    default:
      return state
  }
}

export default emailReducer
