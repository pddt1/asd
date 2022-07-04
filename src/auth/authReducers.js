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
          ...state,
          isLoggedIn: true,
          user: payload,
          message: ''
        };
      case 'AUTH_LOGIN_FAIL':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          message: payload
        };
      default:
        return state;
    }
  }