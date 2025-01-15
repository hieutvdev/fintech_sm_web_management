import axios from 'axios'
import { TokenService } from './TokenService'
import { BASE_URL } from '@/constants/api/index.js'

const baseClient = axios.create({
  baseURL: BASE_URL,
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

  client.interceptors.request.use(
    (response) => {
      console.log('response', response)
      return response
    },
    async (error) => {
      console.log('[RES ERRRRR]', error)
      const originalRequest = error.config

      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const refreshToken = TokenService.getRefreshToken()
        if (refreshToken) {
          try {
            const refreshResponse = await baseClient.post('/auth/refresh', {
              refreshToken,
            })
            const newToken = refreshResponse.data.token
            TokenService.saveToken(newToken)
            originalRequest.headers.Authorization = `Bearer ${newToken}`
            return client.request(originalRequest)
          } catch (refreshError) {
            console.error('[Refresh Token Error]', refreshError)
            TokenService.removeToken()
            window.location.href = 'auth/login'
            return Promise.reject(refreshError)
          }
        } else {
          TokenService.removeToken()
          window.location.href = '/login'
        }
      }
      return Promise.reject(error)
    },
  )

  return client
}

addAuthInterceptor(baseClient)

export { baseClient }
