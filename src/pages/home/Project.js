import ProjectCard from "../../components/cards/ProjectCard";
import cat  from "../../assets/cat.png"
import {Container, Grid, Typography} from "@mui/material";
import ProjectTabs from "../../components/ProjectTabPanel";
export default function Project(){

    return(
        <Container maxWidth={"lg"}>
            <Typography align={"left"}>
                Some things I've built
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <ProjectTabs/>
                </Grid>
            </Grid>
        </Container>

    )
}