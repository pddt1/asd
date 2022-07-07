const initialState = {
    user: null,
    message: '',
    isLoggedIn: false,
    isLoading: false
  }
export function Auth(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'AUTH_LOGIN':
        return {
          ...state,
          isLoading: true
          };
      case 'AUTH_LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          user: payload,
        };
      case 'AUTH_LOGIN_FAILED':
        return {
          ...state,
          isLoading: false,
          message: payload,
        };
      case 'AUTH_LOGOUT':
          return {
            ...state,
            user: null,
            isLoggedIn: false
          };
       
      default:
        return state;
    }
  }