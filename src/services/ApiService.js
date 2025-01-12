import axios from 'axios'
import { TokenService } from './TokenService'
import { AUTH_API } from '@/constants/api/index.js'

const apiClient2000 = axios.create({
  baseURL: 'http://localhost:2000',
  headers: {
    'Content-Type': 'application/json',
  },
})

const apiClient3000 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

const authClient = axios.create({
  baseURL: AUTH_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

const addAuthInterceptor = (client) => {
  client.interceptors.request.use(
    (config) => {
      const token = TokenService.getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        const refreshToken = TokenService.getRefreshToken()
        if (refreshToken) {
          try {
            const response = await authClient.post('/refresh-token', { token: refreshToken })
            const newToken = response.data.token
            TokenService.saveToken(newToken)
            error.config.headers.Authorization = `Bearer ${newToken}`
            return client.request(error.config)
          } catch (refreshError) {
            TokenService.removeToken()
            return Promise.reject(refreshError)
          }
        }
      }
      return Promise.reject(error)
    },
  )
}

addAuthInterceptor(apiClient2000)
addAuthInterceptor(apiClient3000)

export { apiClient2000, apiClient3000, authClient }
