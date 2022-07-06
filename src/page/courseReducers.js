const initialState = {
    data:{},
    isLoading: false,
    isSuccess: false

}
export function Course(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'CREATE_COURSE_SUCCESS':
        return {
            ...state,
            data: [...state.data,payload],
            isLoading:false,
            isSuccess:true
        };
      case 'CREATE_COURSE_FAIL':
        return {
            isLoading:false,
            isSuccess:false
        };
        case 'FECTH_COURSE_LIST_SUCCESS':
            return {
                data: payload,
                isFecthingSuccess: true
            };
        case 'FECTH_COURSE_LIST_FAIL':
                return {
                  message: payload.message,
                  isFecthingSuccess: false
                };
      default:
        return state;
    }
  }