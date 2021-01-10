import http from './http'

export const registerApi=(params)=>http.post('./register',params)
