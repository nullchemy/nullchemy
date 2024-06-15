export const backend = (): string => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //return 'http://localhost:5000/'
    return 'https://server.nullchemy.com/'
  } else {
    // return 'https://nullchemy-api.onrender.com/'
    return 'https://server.nullchemy.com/'
  }
}
