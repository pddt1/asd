import UserService from '../services/user';
export const createUserSuccess = (data) => ({type: 'CREATE_COURSE_SUCCESS', payload:data});
export const createUserFail = (message) => ({type: 'CREATE_COURSE_FAIL',payload: message});
export const fecthUserListSuccess = (data) => ({type: 'FECTH_COURSE_LIST_SUCCESS', payload:data})
export const fecthUserListFail = (message) => ({type: 'FECTH_COURSE_LIST_FAIL', payload:message})

export const createNewUser = (name, email,role) => async dispatch => {
    try {
        const response = await UserService.createUser(name, email, role);
        console.log(response.data)
        dispatch(createUserSuccess(response.data.log));
    } catch (error) {
        const message = error.response.data.message;
        console.log('message :>> ', message);
        dispatch(createUserFail(message));
    }
}

export const getUserList = () => async dispatch => {
    try {
      const response = await UserService.getCourseList();
      console.log(response);
      dispatch(fecthUserListSuccess(response.data.log));
    } catch (error) {
        console.log('error', error)
        // const payload = {
        //   message: error.response.data.message
        // }

        // dispatch(fecthUserListFail(payload));
    }
}
