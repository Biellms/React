import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='grid-footer'>
        <Grid alignItems="center" item xs={12}>
          <Box className='box-1'>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5" align="center" gutterBottom className='text-white'>Siga-nos nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/Biellms" target="_blank" rel="noreferrer">
                <GitHubIcon className='redes' />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" rel="noreferrer">
                <LinkedInIcon className='redes' />
              </a>
            </Box>
          </Box>
          <Box className='box-2'>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom className='text-white' >© 2021 Copyright:</Typography>
            </Box>
            <Box>
              <a target="_blank" rel="noreferrer" href="https://brasil.generation.org">
                <Typography variant="subtitle2" gutterBottom className='text-white' align="center">brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;