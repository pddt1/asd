import { useEffect, useState } from 'react'; 

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { LoadingButton } from '@mui/lab';

function LoginForm(props) {
    const [form,setForm] = useState({
        email:'',
        password: ''
      });
      function handleInput(e) {
        const {name,value} = e.target;
        setForm((preVal) => {
          return {
            ...preVal,
            [name]:value
          }
        })
      };
      function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(form.email,form.password);
      }
 
  return (
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
        
            <LoadingButton
                type='submit'
                size="medium"
                color="primary"
                loading={props.isLoading}
                variant="contained"
            >
                Sign In
            </LoadingButton>
          </Box>
  );  
}

export default LoginForm;
