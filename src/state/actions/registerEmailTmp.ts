export const setEmail = (email: string) => {
  return {
    type: 'SETEMAIL',
    payload: email,
  }
}
