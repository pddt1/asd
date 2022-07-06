import AuthService from '../services/auth';
export const authLoginSuccess = (user) => ({type: 'AUTH_LOGIN_SUCCESS',payload: user});
export const authLoginFailed = (message) => ({type: 'AUTH_LOGIN_FAILED',payload: message});

export const login = (username, password) => async dispatch => {
    try {
        const response = await AuthService.login(username,password);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(authLoginSuccess(response.data));
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        dispatch(authLoginFailed(message));
    }
}

export const reAuth = () => async dispatch => {
    try {
        const response = await AuthService.checksession();
        console.log(response)
        dispatch(authLoginSuccess(response.data));
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        dispatch(authLoginFailed(message));
    }
}