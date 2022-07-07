import { useState,useEffect } from 'react'; 
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

import InputBase from '@mui/material/InputBase';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createNewUser, getUserList } from '../actions';
import { reAuth } from '../../auth/actions';
import { Typography } from '@mui/material';



function ErrorDialog(props) {

    function handleClose(){
        props.onCloseError();
    }

  
  return (
    <Dialog open={props.openErorr} onClose={handleClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
            <Typography>{props.message}</Typography>
            <Button onClick={handleClose}
                        sx={{mt:3, mr:3}}
                        size="small"
                        color="primary"
                        variant="contained"
            >Close</Button>
        </DialogContent>
    </Dialog>
  );  
}

export default ErrorDialog;
