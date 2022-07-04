import { useState } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import { styled, useTheme,  alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
const drawerWidth = 300;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

 
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Toan', 159, 6.0, 24, 4.0),
    createData('Ly', 237, 9.0, 37, 4.3),
    createData('Hoa', 262, 16.0, 24, 6.0),
    createData('Anh', 305, 3.7, 67, 4.3),
    createData('Viet', 356, 16.0, 49, 3.9),
  ];

export default function Profile() {
    const theme = useTheme();
    const classes = useStyles();

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
 
  return (
    <Box
        sx={{ display: 'flex', width:'100%'}}
    >
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
                {['Manage Course Templates', 'School Curriculum Library'].map((text, index) => (
                    <ListItem key={text} disablePadding>
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
            {['Course Adminstration', 'Subjects'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {<BookIcon className={classes.icon} /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider/>
            {['User', 'Student', 'Guardiant'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {<ArticleIcon className={classes.icon} /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider/>
           
        </Drawer>
        <Box sx={{flexGrow: 1, my:3}}>
            <Box 
                sx={{
                    display: 'flex',
                    mx:5
                }}
                >
                <Typography 
                    sx={{color: '#4C3A51',
                    fontSize: '2rem'}} 
                    className={classes.typo}
                >
                    Course Adminstration
                </Typography>
            </Box>
            <Divider/>
            <Grid container>
                <Grid item sx={{width: '100%', mt: 3, mx: 5}}>
                    <Box
                        sx={{
                            display: 'flex'
                        }}
                    >
                        {/* <Input
                            size= "small"
                            classes={{
                            root: classes.input,
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused,
                            adornedStart: classes.adornedStart
                            }}
                            name="search"
                            type="text"
                            placeholder="Enter name"
                            startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                            }
                        />
                         <FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel >Age</InputLabel>
                            <Select
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            inputProps={{ readOnly: true }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}
                        <Button
                            type='submit'
                            variant="contained" size="medium"
                        >
                            New
                        </Button>
                    </Box>
                    <Box sx={{mt:2}}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="center">Created Date</StyledTableCell>
                                        <StyledTableCell align="center">Subject</StyledTableCell>
                                        <StyledTableCell align="center">School Year</StyledTableCell>
                                        <StyledTableCell align="center">Status</StyledTableCell>
                                        <StyledTableCell align="center"></StyledTableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Button>
                                                    <MoreHorizIcon/>
                                                </Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
         

                </Grid>
            </Grid>
        </Box>
          
     

    </Box>
  );
}
