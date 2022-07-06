import axios from "axios";
import authHeader from './auth-header';
export const customAxios = axios.create({
    baseURL: 'http://localhost:8000',
});
customAxios.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // for Node.js Express back-end
    config.headers['x-access-token'] = user.accessToken;
  } 
  return config;
})
customAxios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        window.location.href = '/login';
      }
      // if (error.response.status === 403) {
      //   window.location.href = '/';
      // }
});
export default customAxios;

  