import axios, { AxiosResponse } from 'axios'

const backend = (): string => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return 'http://localhost:8000/';
    } else {
      return 'https://nullcommerce.onrender.com/';
    }
}
  

const api = async (method: string = 'GET', slug: string, data: object = {}): Promise<AxiosResponse> =>{
  try {
    const config = {
        method: method,
        maxBodyLength: Infinity,
        url: backend()+slug,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
    const res = await axios(config);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default api