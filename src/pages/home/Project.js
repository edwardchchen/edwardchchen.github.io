import ProjectCard from "../../components/cards/ProjectCard";
import cat from "../../assets/cat.png"
import {Container, Grid, Typography} from "@mui/material";
import ProjectTabs from "../../components/ProjectTabPanel";
import * as React from "react";

export default function Project() {

    return (
        <Container sx={{height: "90vh", width: "70vw", marginTop: "0vh"}}>
            <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                        sx={{color: "#66FCF1"}}>
                Some things I've built
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    {/*<ProjectTabs/>*/}
                </Grid>
            </Grid>
        </Container>

    )
}