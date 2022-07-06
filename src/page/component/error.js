import { Box } from "@mui/material";
import Sidebar from "./sidebar";

export default function Error(props) {
  return (
    <Box sx={{ display: 'flex', width:'100%'}}> 
        <Sidebar/>
        <Box sx={{flexGrow: 1, my:3}}>
          <Box sx={{display: 'flex',mx:5}}>
                <h1>{props.code}</h1>
            </Box>
        </Box>
    </Box>
  );
}
