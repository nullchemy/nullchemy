import axios, { AxiosResponse } from 'axios'
import { backend } from '../utils/backend'

const api = async (
  method: string = 'GET',
  slug: string,
  data: object = {},
  headers: object = {}
): Promise<AxiosResponse> => {
  //const respip = await axios.get('https://api.ipify.org/?format=json')

  try {
    const config = {
      method: method,
      maxBodyLength: Infinity,
      url: backend() + 'api/v1/' + slug,
      headers: {
        ...headers,
        Authorization: 'Bearer ',
      },
      data: data,
      withCredentials: true,
    }
    const res = await axios(config)
    return res
  } catch (err: any) {
    return { ...err.response }
  }
}

export default api
