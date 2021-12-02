import React from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './CadastroUsuario.css';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#red',
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
        borderColor: 'red',
        boxShadow:  '3px 3px 3px rgb(207, 55, 55)',
      },
    },
  });

function cadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='grid-cadastro'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='text-bold-cadastro'>Cadastrar</Typography>
                        <CssTextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <CssTextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <CssTextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <CssTextField id='confirmarSenha' label='ConfirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='primary' className='botao-cancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='botao-cadastrar'>
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default cadastroUsuario
