import {Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import goKart from "../../assets/go-kart.png";

export default function AboutMe() {
    return (
        <div>
            <Container sx={{marginTop: "10vh"}}>
                <Grid container>
                    <Grid item xs={8}>

                        <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                                    sx={{color: "#66FCF1"}}>
                            About me
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <Grid item xs={10}>
                            <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>
                                My interest in cloud computing started during my first internship in 2020.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia sx={{height: "50vh", borderRadius: "15px"}} image={goKart}/>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )

}