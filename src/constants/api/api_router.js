const AUTH_ENDPOINT = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
}

const ARTICLE_ENDPOINT = {
  GET_ALL: '/articles',
  GET_BY_ID: '/articles/',
  CREATE: '/articles',
  UPDATE: '/articles/',
  DELETE: '/articles/',
}

export { AUTH_ENDPOINT, ARTICLE_ENDPOINT }
