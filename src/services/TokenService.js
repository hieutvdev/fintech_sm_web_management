export const TokenService = {
  saveToken(token) {
    localStorage.setItem('a-token', token)
  },
  saveRefreshToken(token) {
    localStorage.setItem('a-refresh-token', token)
  },
  getToken() {
    return localStorage.getItem('a-token')
  },
  getRefreshToken() {
    return localStorage.getItem('a-refresh-token')
  },
  removeToken() {
    localStorage.removeItem('a-token')
    localStorage.removeItem('a-refresh-token')
  },
}
