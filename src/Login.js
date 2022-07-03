import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function SignInSide() {
 

  return (
      <Grid container sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
        <Grid item md={6}>
          <Box
            sx={{
              mt: 5,
              mb: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant='h2'>Tabula training</Typography>
            <Typography>Your Learning Guide</Typography>
          </Box>
          <Box
            sx={{
              mx:3,
              mb:2,
              display: 'flex',
              flexDirection: 'column',
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
              />

          </Box>
          <Box
            sx={{
              mx:3,
              mb:2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
           <InputLabel sx={{ mx:1}}>
              Password <span style={{color:'red'}}>*</span>
            </InputLabel>
            <OutlinedInput
              placeholder="Password"
              size="small"
              fullWidth
              id='password'
              name='password'
              />
          </Box>
          <Box
            sx={{
              mx:3,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
             <FormControlLabel sx={{mx:0}} control={<Checkbox/>}/>
             <Typography variant='body1'>Remember me</Typography>

          </Box>

         
        </Grid>
      </Grid>
  );
}
// hỏi a khoa: làm sao để check box với chữ thẳng hàng
//Cssbaseline dùng sao gì sao ko có lại bị viền trắng