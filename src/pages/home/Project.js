import ProjectCard from "../../components/cards/ProjectCard";
import cat  from "../../assets/cat.png"
import {Container, Grid, Typography} from "@mui/material";
export default function Project(){

    return(
        <Container maxWidth={"lg"}>
            <Typography>
                Projects
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <ProjectCard title={"EDWRAD"} content={"image"} image={cat}/>
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard title={"EDWRAD"} content={"image"} image={cat}/>
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard title={"EDWRAD"} content={"image"} image={cat}/>
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard title={"EDWRAD"} content={"image"} image={cat}/>
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard title={"EDWRAD"} content={"image"} image={cat}/>
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard title={"EDWRAD"} content={"image"} image={cat}/>
                </Grid>

            </Grid>

        </Container>

    )
}