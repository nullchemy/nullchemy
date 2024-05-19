type Action = {
    type: string,
    payload?: string
}
const themeReducer = (state: string = 'light', action: Action) => {
    switch (action.type) {
        case 'SETTHEME':
            return action.payload
        case 'light':
            return 'light'
        default:
            return state
    }
}

export default themeReducer