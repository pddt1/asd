import AuthService from '../services/auth';
export const authLoginSuccess = (user) => ({type: 'AUTH_LOGIN_SUCCESS',payload: user});
export const authLoginFailed = (message) => ({type: 'AUTH_LOGIN_FAILED',payload: message});
export const authLogin = () => ({type: 'AUTH_LOGIN'});
export const authLogOut = () => ({type: 'AUTH_LOGOUT'});


export const login = (username, password) => async dispatch => {
    try {
        dispatch(authLogin());
        const response = await AuthService.login(username,password);
        console.log(response)
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(authLoginSuccess(response.data));
    } catch (error) {
        console.log(error.response.data.message)
        const message = error.response.data.message;
 
        dispatch(authLoginFailed(message));
    }
}

export const reAuth = () => async dispatch => {
    try {
        dispatch(authLogin());
        const response = await AuthService.checksession();
        console.log(response)
        dispatch(authLoginSuccess(response.data));
    } catch (error) {
        const message = error.response.data.message;
        dispatch(authLoginFailed(message));
    }
}

export const logOut = () => dispatch => {
        localStorage.removeItem("user");
        dispatch(authLogOut());
}

