import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import { DeleteContext } from './context/ContextProvider';
import { Alert } from 'react-bootstrap';

const Navbar = () => {
  const { dlttask, setDlttask } = useContext(DeleteContext)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:'#232f3e'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"center"}}>
              Redux TO-DO App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {
        dlttask ? <Alert variant="danger" onClose={() => setDlttask(false)} dismissible>
          <Alert.Heading>Your task removed successfully</Alert.Heading>
        </Alert>:""
      }
      </>
  )
}

export default Navbar