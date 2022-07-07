import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ArticleIcon from "@mui/icons-material/Article";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";

const drawerWidth = 300;

const useStyles = makeStyles({
  icon: {
    color: "white",
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Sidebar(props) {
  const menu = [
    {id:1, title: 'User'},
    {id:2, title: 'Log Out', onItemClick: () => {
      props.logOut();
    }}
  ];
  const classes = useStyles();


  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#1B2430",
          color: "white",
          width: drawerWidth,
          boxSizing: "border-box",
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
        
        {menu.map((item, index) => (
          <ListItem key={item.id} disablePadding onClick={item.onItemClick}>
            <ListItemButton>
              <ListItemIcon>
                {<ArticleIcon className={classes.icon} />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

export default Sidebar;
