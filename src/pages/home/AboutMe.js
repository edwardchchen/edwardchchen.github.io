import {Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import profilePic from "../../assets/profilePic.jpg";

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
                            <Typography component="h6" variant="subtitle1" align="left" color="textPrimary"
                                        gutterBottom>
                                I first developed a fascination for cloud computing during my initial internship in
                                2020, where I got the opportunity to work on Web applications using React and AWS. It
                                was an enjoyable experience as it allowed me to see how cloud technology can provide
                                software with a high level of flexibility and scalability.
                            </Typography>
                            <Typography component="h6" variant="subtitle1" align="left" color="textPrimary"
                                        gutterBottom>
                                As of today, I possess a year of professional experience in creating cloud-native
                                solutions utilizing AWS, as well as have obtained two AWS certifications. In the future,
                                I aspire to expand my knowledge about a variety of cloud services, to advance my
                                expertise in this field.
                            </Typography>
                            <Typography component="h6" variant="subtitle1" align="left" color="textPrimary"
                                        gutterBottom>
                                Aside from my professional pursuits, I am passionate about photography. I take pleasure
                                in capturing different landscapes and cityscapes, and often find myself discovering new
                                perspectives through my camera lens. Additionally, I am a car enthusiast, which is
                                another hobby of mine. I derive enjoyment from various car-related activities such as
                                motorsport and car reviews, as well as driving.


                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <CardMedia sx={{width: "35vw"}}>
                            <img src={profilePic} width="90%" alt="Edward Chen - University of British Columbia - Amazon Web Services"/>
                        </CardMedia>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )

}