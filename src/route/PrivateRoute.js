import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Error from '../page/component/error';
import {
  TEACHER_ROLE,
  COURSE_MANAGER_ROLE,
  ASSISTANT_ROLE
} from '../constant';

export default function PrivateRoute({ children }) {
  const {isLoggedIn,user } = useSelector(state => state.Auth);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  if(user.roleId !== 2){
    return <Error code={403}/>;
  }
  return isLoggedIn ? children : <Navigate to="/login" />;
}