import './App.css';
import Login from './auth/components/Login';
import { Routes, Route } from "react-router-dom";
import Profile from './page/component/profile';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      width:'100%'
      }}>
        <CssBaseline/>
          <Routes>
            <Route exact path="/" element={<Profile/>} />
            <Route exact path="/login" element={<Login/>} />
          </Routes>
    </Box>
  );  
}

export default App;
