const initialState = {
    data:[],
    isLoading: false,
}
export function Course(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'CREATE_COURSE':
        return {
            ...state,
            isLoading: true,
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
               isLoading: true
              };
        case 'FECTH_COURSE_LIST_SUCCESS':
            return {
                data: payload,
                isLoading: false,
                isFetchingSuccess: true
            };
        case 'FECTH_COURSE_LIST_FAIL':
                return {
                  ...state,
                  message: payload,
                  isLoading: false,
                  isFetchingSuccess: false
                };
      default:
        return state;
    }
  }