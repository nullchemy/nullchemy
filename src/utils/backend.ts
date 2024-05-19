export const backend = (): string => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // return 'http://localhost:8000/'
    return 'https://nullchemy-api.onrender.com/'
  } else {
    return 'https://nullchemy-api.onrender.com/'
  }
}
