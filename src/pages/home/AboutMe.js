import {Container, Grid, Typography} from "@mui/material";
import * as React from "react";

export default function AboutMe() {
    return (
        <div>
            <Container sx={{marginTop: "10vh"}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                                    sx={{color: "#66FCF1"}}>
                            About me
                        </Typography>

                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>
                            I am currently a fifth year Computer Science student at The University of British
                            Columbia. I have a strong interest in cloud computing and software development,
                            and I am excited to begin exploring career opportunities in these fields.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )

}