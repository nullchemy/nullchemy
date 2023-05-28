import axios, { AxiosResponse } from 'axios'

const backend = (): string => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'https://api.nullchemy.com/'
  } else {
    return 'https://api.nullchemy.com/'
  }
}

const api = async (
  method: string = 'GET',
  slug: string,
  data: object = {}
): Promise<AxiosResponse> => {
  try {
    const config = {
      method: method,
      maxBodyLength: Infinity,
      url: backend() + 'api/v1/' + slug,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    const res = await axios(config)
    return res
  } catch (error: any) {
    console.error(error)
    return error
  }
}

export default api
