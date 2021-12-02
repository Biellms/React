import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './Login.css';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4c63fc',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(202, 199, 199)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
        boxShadow:  '2px 2px 2px white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4c63fc',
        boxShadow:  '3px 3px 3px 3px #303F9E',
      },
    },
  });

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='grid-login' >
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form>
                    <Typography variant="h3" gutterBottom color="initial" component="h3" align="center"
                    className='text-bold-login'>
                        Entrar
                    </Typography>
                    <CssTextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal'
                    fullWidth />
                    <CssTextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal'
                    type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                      <Link to='/home' className='text-decorator-none'>
                        <Button type='submit' variant='contained' color='primary' className='botao-logar'>
                          Logar
                        </Button>
                      </Link>
                    </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}> 
                      <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center' className='text-login'>Não tem uma conta?</Typography>
                      </Box>
                      <Link to='/cadastroUsuario' className='text-decorator-none'>
                      <Typography variant='subtitle1' gutterBottom align='center' className='text-bold-login'>Cadastre-se</Typography>
                      </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='grid-imagem-login'>
              </Grid>
        </Grid>
    );
}

export default Login;
