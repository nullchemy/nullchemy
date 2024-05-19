export const setTheme = (theme: string) => {
  return {
    type: 'SETTHEME',
    payload: theme,
  }
}
