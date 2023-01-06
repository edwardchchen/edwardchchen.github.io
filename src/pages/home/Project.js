import ProjectCard from "../../components/cards/ProjectCard";
import placeHolder from "../../assets/placeHolder.png"
import {Container, Grid, Typography} from "@mui/material";
import ProjectTabs from "../../components/ProjectTabPanel";
import * as React from "react";
import covidTracker from "../../assets/projectImages/covidTracker.png"
import drinkWater from "../../assets/projectImages/drinkWater.png"
import todoList from "../../assets/projectImages/todoList.png"

export default function Project() {

    return (
        <Container sx={{height: "90vh", width: "70vw", marginTop: "20vh"}}>
            <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                        sx={{color: "#66FCF1"}}>
                Some things I've built
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                    <ProjectCard projectName={"UBC courses and room lookup"}
                                 image={placeHolder}
                                 contents={""} tags={["Web", "React", "TypeScript", "JUnit", "REST API"]}
                                 githubLink={"https://github.com/edwardchchen/Campus-explorer"}/>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <ProjectCard projectName={"NBA Stats"}
                                 image={placeHolder}
                                 contents={""} tags={["Java", "Java Swing", "OracleDB", "SQL"]}
                                 githubLink={"https://github.com/edwardchchen/Basketball-Database-Project"}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ProjectCard projectName={"Covid-19 cases counter"}
                                 image={covidTracker}
                                 contents={""} tags={["IOS", "Swift", "Charts", "SwiftyJson"]}
                                 githubLink={"https://github.com/edwardchchen/COVID-19-iOS"}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ProjectCard projectName={"Drink Water"}
                                 image={drinkWater}
                                 contents={""} tags={["IOS", "Swift", "Mobile", "Notification"]}
                                 githubLink={"https://github.com/edwardchchen/DrinkWater"}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ProjectCard projectName={"Todo List"}
                                 image={todoList}
                                 contents={""} tags={["Java", "JavaFx", "JUnit", "OpenWeather API"]}
                                 githubLink={"https://github.com/edwardchchen/Basketball-Database-Project"}/>
                </Grid>

            </Grid>
        </Container>

    )
}