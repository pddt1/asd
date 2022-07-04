import { useState } from 'react'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import background from '../../a.jpeg';
import { makeStyles } from '@mui/styles';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../actions';
const useStyles = makeStyles({
  typo: {
      color: '#898AA6',
      letterSpacing: '0.3rem'
  },

});

export default function Login() {
  let navigator = useNavigate();
  const classes = useStyles();
  const [form,setForm] = useState({
    email:'',
    password: ''
  });

  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.Auth);


  function handleInput(e) {
    const {name,value} = e.target;
    setForm((preVal) => {
      return {
        ...preVal,
        [name]:value
      }
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(login(form.email,form.password));
  }

  if(isLoggedIn){
    navigator('/');
  }

  return (
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          md={6}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
        <Grid item md={6}>
          <Box
            sx={{
              mt: 7,
              mb: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography className={classes.typo} variant='h4'>Tabula training</Typography>
            <Typography >Your Learning Guide</Typography>
          </Box>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                mb:2,
                alignItems: 'left',
                width: '25rem'
              }}
            >
              <InputLabel sx={{ mx:1}}>
                Email Adress <span style={{color:'red'}}>*</span>
              </InputLabel>
              <OutlinedInput
                placeholder="Email Adress"
                size="small"
                fullWidth
                id='email'
                name='email'
                value={form.email}
                onChange={handleInput}

                />

            </Box>
            <Box 
              sx={{
                mb:2,
                width: '25rem'

              }}
            >
            <InputLabel sx={{ mx:1}}>
                Password <span style={{color:'red'}}>*</span>
              </InputLabel>
              <OutlinedInput
                type='password'
                placeholder="Password"
                size="small"
                fullWidth
                id='password'
                name='password'
                value={form.password}
                onChange={handleInput}
                />
            </Box>
            

            <Button
              type='submit'
             variant="contained" size="medium"
            >
                Sign In
            </Button>
          </Box>
          
         
        </Grid>
      </Grid>
  );
}
