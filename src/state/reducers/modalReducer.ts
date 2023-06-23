type Action = {
  type: string
  payload?: boolean
}
const modalReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case 'SETMODAL':
      return action.payload
    default:
      return state
  }
}

export default modalReducer
