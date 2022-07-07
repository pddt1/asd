import { useState,useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';

import { logOut } from '../../auth/actions';
import { createNewUser, getUserList } from '../actions';
import Sidebar from './sidebar';
import ModalDialog from './modal';
import TableCustom from './table';

const useStyles = makeStyles( {
    root: {
        padding: '2px',
      },
      input: {
        color: 'white',
        width: '20%',
    
        "&:hover $notchedOutline": {
          borderColor: 'grey'
        },
        "&$focused $notchedOutline": {
          borderColor: 'grey'
        },
      },
      notchedOutline: {
        borderColor: 'grey'
      },
      focused: {},
      adornedStart: {
        color: 'black'
      },
    typo: {
        color: '#4C3A51',
        fontSize: '2rem'
    },
    icon: {
        color: 'white'
    }
  
  });
  
export default function Profile() {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();
    const {isSuccess,data,isLoading} = useSelector(state => state.Course);
    useEffect(()=>{
        if(isSuccess){
            setOpen(false);
            enqueueSnackbar('Created!',{variant: 'success'});
          }
        if(isSuccess===false){
          enqueueSnackbar('Canot create user!',{variant: 'error'});
        }

    },[isSuccess])

    useEffect(() => {
        dispatch(getUserList());       
    },[])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = (name,email,role) => {
        dispatch(createNewUser(name,email,role));
    }

    const alogOut = () => {
        dispatch(logOut())
    }

 
   
  return (
    <Box sx={{ display: 'flex', width:'100%'}}> 
        <Sidebar logOut={alogOut}/>
        <Box sx={{flexGrow: 1, my:3}}>
              <Box sx={{display: 'flex',mx:5}}>
                <Typography sx={{color: '#4C3A51',fontSize: '2rem'}}>
                    Course Adminstration
                </Typography>
            </Box>
            <Divider/>
            <Grid container>
                <Grid item sx={{width: '100%', mt: 3, mx: 5}}>
                    <Box sx={{ display: 'flex'}}>
                        <Button
                            type='submit'
                            variant="contained" size="medium"
                            onClick={handleClickOpen}
                        >
                            New
                        </Button>
                        <ModalDialog 
                            onClose={handleClose} 
                            onSubmit={handleSubmit}
                            isSuccess={isSuccess}
                            open={open}
                            isLoading={isLoading}
                        />
                    </Box>
                    <Box sx={{mt:2}}>
                        <TableCustom data={data}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}
