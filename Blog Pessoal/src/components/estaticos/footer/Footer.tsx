import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#212227", height: "120px" }}>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/Biellms" target="_blank" rel="noreferrer">
                <GitHubIcon style={{ fontSize: 50, color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" rel="noreferrer">
                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#212227", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright:</Typography>
            </Box>
            <Box>
              <a target="_blank" rel="noreferrer" href="https://brasil.generation.org">
                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;