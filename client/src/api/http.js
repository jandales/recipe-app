import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // Let callers handle auth redirects
    }
    return Promise.reject(err)
  }
)

export default http
