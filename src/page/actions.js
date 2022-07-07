import UserService from '../services/user';
export const createUser = () => ({type: 'CREATE_COURSE'});
export const createUserSuccess = (data) => ({type: 'CREATE_COURSE_SUCCESS', payload:data});
export const createUserFail = (message) => ({type: 'CREATE_COURSE_FAIL',payload: message});
export const fecthUser = () => ({type: 'FECTH_COURSE_LIST'})
export const fecthUserListSuccess = (data) => ({type: 'FECTH_COURSE_LIST_SUCCESS', payload:data})
export const fecthUserListFail = (message) => ({type: 'FECTH_COURSE_LIST_FAIL', payload:message})

export const createNewUser = (name, email,role) => async dispatch => {
    try {
        dispatch(createUser());
        const response = await UserService.createUser(name, email, role);
        dispatch(createUserSuccess(response.data.log));
    } catch (error) {
        dispatch(createUserFail('error'));
    }
}

export const getUserList = () => async dispatch => {
    try {
        dispatch(fecthUser());
      const response = await UserService.getCourseList();
      console.log(response);
      dispatch(fecthUserListSuccess(response.data.log));
    } catch (error) {
        dispatch(fecthUserListFail('error'));
    }
}
