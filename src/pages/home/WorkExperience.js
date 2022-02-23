import cat from "../../assets/cat.png"
import {Container, Divider, Grid, Tabs, Typography} from "@mui/material";
import WorkCard from "../../components/cards/WorkCard";
import VerticalTabs from "../../components/WorkTabPanel";
import awsLogo from "../../assets/logos/awsLogo.png";
import * as React from "react";
import ubcLogo from "../../assets/logos/cicLogo.png";

export default function WorkExperience() {
    const cicTags = ["React", "AWS", "Javascript", "CSS"]

    return (
        <Container sx={{height: "90vh", width: "70vw", marginTop: "0vh"}}>
            <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                        sx={{color: "#66FCF1"}}>
                Where I have worked
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <WorkCard image={awsLogo} company={"Amazon Web Services"}
                              jobTitle={"Professional service consultant intern"} date={"Jun 2022 - Sep 2022"}
                              contents={[]} tags={[]}/>

                </Grid>
                <Grid item xs={12}>
                    <WorkCard image={ubcLogo} company={"UBC Cloud Innovation Centre, powered by AWS"}
                              jobTitle={"Developer Intern"} date={"Jan 2021 - Aug 2021"}
                              contents={["Co-developed open source projects (Student Connect App, Amazon Location Service Demo, Vaccine Distribution)",
                                  "Attended meetings with customers to present development progress",
                                  "Wrote documentation on the architecture, pricing and deployment of the projects that I have involved in",
                                  "Assisted in the live demo of the Student Workshop: AWS RoboMaker: Building robotics applications from zero to hero"]}
                              tags={cicTags}/>
                </Grid>

            </Grid>
        </Container>

    )
}