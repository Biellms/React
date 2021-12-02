import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <AppBar position="static" className='appbar'>
        <Toolbar variant="dense" className='appbar'>
          <Link to='/home'>
            <Box className='pointer' >
              <Typography variant="h5" color="inherit">
                Biel | Code Blog
              </Typography>
            </Box>
          </Link>
          <Box display="flex" justifyContent="start">
            <Link to='/home'>
              <Box mx={1} className='pointer'>
                <Typography variant="h6" color="inherit">
                  <a href="/home"> Home </a>
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            <Link to='/login'>
              <Box mx={1} className='pointer'>
                <Typography variant="h6" color="inherit">
                  Sair
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;