import { useState,useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import { styled, useTheme,  alpha } from '@mui/material/styles';
import AuthService from '../../services/auth';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/OutlinedInput';
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { createNewUser, getUserList } from '../actions';
import { reAuth,logOut } from '../../auth/actions';
import Sidebar from './sidebar';
import ModalDialog from './modal';
import TableCustom from './table';
import Error from './error';
import ErrorDialog from './errornoti';
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

    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();
    const {isSuccess,data,code,message,isLoading} = useSelector(state => state.Course);
    useEffect(()=>{
        if(isSuccess){
            setOpen(false);
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


 
   
  return (
    <Box sx={{ display: 'flex', width:'100%'}}> 
        <Sidebar/>
        <Box sx={{flexGrow: 1, my:3}}>
            {code ? <Error code={code} message={message} />: (
              <>
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
              </>
              )}
        </Box>
    </Box>
  );
}
