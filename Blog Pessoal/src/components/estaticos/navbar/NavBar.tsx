import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './NavBar.css';

function NavBar() {

  const [token, setToken] = useLocalStorage('token');
  let history = useHistory()

  function goLogout() {
    setToken('')
    alert('Usuário deslogado')
    history.push('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className='appbar'>
          <Link to='/home'>
            <Box className='pointer' >
              <Typography variant="h5" color="inherit">
                <img src="https://i.imgur.com/O1GG69J.png" alt="" width="" height="200px" />
              </Typography>
            </Box>
          </Link>
          <Box display="flex" justifyContent="start">
            <Link to='/home' className='text-decorator-none'>
              <Box mx={1} className='pointer'>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to='/posts' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            </Link>
            <Link to='/temas' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
               Temas
              </Typography>
            </Box>
            </Link>
            <Link to='/formularioTema' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                Cadastrar temas
              </Typography>
            </Box>
            </Link>
          </Box>
          <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className='pointer' onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;