const initialState = {
    data:[],
    isLoading: false,
    isSuccess: false

}
export function Course(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'CREATE_COURSE':
        return {
            ...state,
            isLoading: true,
            isSuccess: false
        };
      case 'CREATE_COURSE_SUCCESS':
        return {
            ...state,
            data: [...state.data,payload],
            isLoading:false,
            isSuccess:true
        };
      case 'CREATE_COURSE_FAIL':
        return {
            ...state,
            message: payload,
            isLoading:false,
            isSuccess:false
        };
        case 'FECTH_COURSE_LIST':
            return {
                data: [],
               isLoading: true,
               isSuccess: false
            };
        case 'FECTH_COURSE_LIST_SUCCESS':
            return {
                data: payload,
                isLoading: false,
                isSuccess: true
            };
        case 'FECTH_COURSE_LIST_FAIL':
                return {
                  ...state,
                  message: payload,
                  isLoading: false,
                  isSuccess: false
                };
      default:
        return state;
    }
  }