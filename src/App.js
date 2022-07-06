import './App.css';
import Login from './auth/components/Login';
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from './page/component/profile';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {reAuth} from './auth/actions';
import PrivateRoute from './route/PrivateRoute';
function App() {
  const dispatch = useDispatch()
   useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
          dispatch(reAuth());
        }
    },[])
  return (
    <Box sx={{
      display: 'flex',
      width:'100%'
      }}>
        <CssBaseline/>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Profile/>
                </PrivateRoute>
              }
            />
          </Routes>
    </Box>
  );  
}

export default App;
