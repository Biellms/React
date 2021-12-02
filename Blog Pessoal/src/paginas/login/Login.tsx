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
      borderBottomColor: '#303F9E',
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
        borderColor: '#303F9E',
        boxShadow:  '2px 2px #303F9E',
      },
    },
  });

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form>
                    <Typography variant="h3" gutterBottom color="initial" component="h3" align="center"
                    style={{fontWeight: 'bold', color: 'white'}}>
                        Entrar
                    </Typography>
                    <CssTextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal'
                    fullWidth />
                    <CssTextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal'
                    type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                      <Link to='/home' className='text-decorator-none'>
                        <Button type='submit' variant='contained' color='primary'>
                          Logar
                        </Button>
                      </Link>
                    </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}> 
                      <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{color: 'aliceblue'}}>Não tem uma conta?</Typography>
                      </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold', color: 'white'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
              </Grid>
        </Grid>
    );
}

export default Login;
