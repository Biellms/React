import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
  return (
    <div >
      <Grid container direction="row" justifyContent="center" alignItems="center" className='grid-login'>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom component="h3" align="center" className='title-1'>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom component="h5" align="center" className='title-1'>Expresse aqui suas duvidas, curiosidades e muitos mais! Sobre o Mundo da Programação!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" className='botao'>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;