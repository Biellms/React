import React from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3f4247" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box marginLeft={25}>
                        <Box paddingX={20} >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Expresse aqui os seus pensamentos, duvidas e opiniões sobre o mundo da programação e divirta-se!</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                            </Box>
                            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#303235", color: "white" }}>Ver Postagens</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className="img-1" src="https://i.imgur.com/H88yIo2.png" alt="" width="600px" height="600px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>''
        </div>
    );
}

export default Home;