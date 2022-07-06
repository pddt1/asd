const initialState = {
    user: null,
    message: '',
    isLoggedIn: false,
}
export function Auth(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'AUTH_LOGIN_SUCCESS':
        return {
          isLoggedIn: true,
          user: payload,
          message: ''
        };
      case 'AUTH_LOGIN_FAIL':
        return {
          isLoggedIn: false,
          user: null,
          message: payload
        };
      default:
        return state;
    }
  }