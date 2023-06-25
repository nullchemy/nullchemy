export const setIsLogged = (logged: boolean) => {
  return {
    type: 'SETLOGGED',
    payload: logged,
  }
}
