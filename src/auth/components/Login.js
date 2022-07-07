import { useEffect, useState } from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import background from '../../a.jpeg';
import { makeStyles } from '@mui/styles';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../actions';
import { createNewUser, getUserList } from '../../page/actions';
import LoginForm from './Loginform';

const useStyles = makeStyles({
  typo: {
      color: '#898AA6',
      letterSpacing: '0.3rem'
  },
  leftGrid: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  title: {
      marginTop: '4rem',
      marginLeft: '1rem',
      marginBottom: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }

});

export default function Login() {
  let navigator = useNavigate();
  const classes = useStyles();


  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.isLoggedIn);
  const isLoading = useSelector(state => state.Auth.isLoading);

  useEffect(() => {
    console.log('isLoggedIn :>> ', isLoggedIn);
    if(isLoggedIn){
      navigator('/');
    }
  },[isLoggedIn])


  function handleSubmit(email,password){
    dispatch(login(email,password));
  }


  return (
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          md={6}
          className= {classes.leftGrid}
        />
        <Grid item md={6}>

          <Box
           className= {classes.title}
          >
            <Typography className={classes.typo} variant='h4'>Tabula training</Typography>
            <Typography >Your Learning Guide</Typography>
          </Box>
          
          <LoginForm isLoading={isLoading} onSubmit={handleSubmit}></LoginForm>

        </Grid>
      </Grid>
  );
}
