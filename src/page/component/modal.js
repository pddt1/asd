import { useState,useEffect } from 'react'; 
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import InputBase from '@mui/material/InputBase';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TEACHER_ROLE, COURSE_MANAGER_ROLE, ASSISTANT_ROLE } from '../../constant';

const useStyles = makeStyles({
    icon: {
        color: 'white'
    },
    form: {
        width:'100%',
        margin: 'auto', 
    },
    select: {
        marginTop:'0.5rem'
    }
});
  const InputCustom = styled(InputBase,Select)(({ theme }) => ({
    'label + &': {
      marginTop: '1rem',
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
    },
  }));

function ModalDialog(props) {
    // const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const { open} = props;
    // const isSuccess = useSelector(state => state.Course.isSuccess);

    const [form, setForm] = useState({
        fullname:'',
        email:'',
        role: TEACHER_ROLE
    });

    // useEffect(() => {
    //     if(isSuccess===false){
    //         enqueueSnackbar('Canot create user!',{variant: 'error'});
    //     }
    // },[isSuccess]);

    useEffect(() => {
        if(!props.open){
            setForm({
                fullname:'',
                email:'',
                role:1
            });
        }
    },[props.open])
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm(preVal => {
            return {
                ...preVal,
                [name] : value
            }
        })
    }

    function handleClose(){
        props.onClose();
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(form.name,form.email,form.role);
    }
  
  return (
    <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>New Course</DialogTitle>
        <DialogContent>
            <Box component="form" onSubmit={handleSubmit} noValidate className={classes.form}>
                <Box display='flex' flexDirection='row'>
                    <FormControl size='small' variant="standard">
                        <InputLabel shrink >Name</InputLabel>
                        <InputCustom name='name' value={form.name} onChange={handleChange} label="enter name" />
                    </FormControl>
                    <FormControl sx={{ml:5}} size='small' variant="standard">
                        <InputLabel shrink >Email</InputLabel>
                        <InputCustom name='email' value={form.email} onChange={handleChange}  />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl  sx={{mt:3, minWidth: '100%' }} size="small">
                        <InputLabel >Role</InputLabel>
                            <Select className={classes.select}
                                labelId="demo-select-small"
                                id="demo-select-small"
                                name="role"
                                value={form.role}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={TEACHER_ROLE}>Teacher</MenuItem>
                                <MenuItem value={COURSE_MANAGER_ROLE}>Course Manager</MenuItem>
                                <MenuItem value={ASSISTANT_ROLE}>Assistant</MenuItem>
                            </Select>
                    </FormControl>
                </Box>
                <Box sx={{width:'100%',display:'flex',alignItems: 'flex-end'}}>
                    <Button onClick={handleClose}
                        sx={{mt:3, mr:3}}
                        size="small"
                        color="primary"
                        variant="contained"
                    >Close</Button>
                    <LoadingButton
                        type='submit'
                        size="small"
                        color="primary"
                        loading={props.isLoading}
                        variant="contained"
                        >
                        Create
                    </LoadingButton>
                </Box>
            </Box>
        </DialogContent>
    </Dialog>
  );  
}

export default ModalDialog;
