import { useState,useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import { styled, useTheme,  alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import { makeStyles } from '@mui/styles';
import AuthService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 300;

const useStyles = makeStyles({
    icon: {
        color: 'white'
    }
});
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

function Sidebar(props) {
    let navigator = useNavigate();

    const dispatch = useDispatch();
    const classes = useStyles();
    // function handleClick(e) {
    //     // if (e.target.innerHTML === 'Log Out') {
    //     //     AuthService.logout();
    //     //     dispatch({
    //     //       type: 'LOGOUT',
    //     //     });
    //     }
    
  return (
    <Drawer
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            backgroundColor: '#1B2430',
            color: 'white',
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    }}
    variant="persistent"
    anchor="left"
    open={true}
>
     <DrawerHeader>
        <IconButton>
           <ChevronLeftIcon className={classes.icon} />
        </IconButton>
    </DrawerHeader>
    <List>
        {['User', 'Log Out'].map((text, index) => (
            <ListItem key={index} disablePadding >
                <ListItemButton>
                    <ListItemIcon>
                        {<ArticleIcon className={classes.icon}/> }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
    <Divider/>

   
</Drawer>
  );  
}

export default Sidebar;
