import { Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import profilePic from "../../assets/profilePic.jpg";

export default function AboutMe() {
  return (
    <div style={{ backgroundColor: '#FFFBF5' }}> {/* Added warm white background */}
      <Container sx={{ marginTop: "10vh" }}>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              component="h3"
              variant="h4"
              align="left"
              sx={{
                color: "#F97316", // Terracotta color
                fontWeight: 600,
                marginBottom: "2rem"
              }}
              gutterBottom
            >
              About me
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Grid item xs={10}>
              <Typography
                component="h6"
                variant="subtitle1"
                align="left"
                sx={{
                  color: "#292524", // Warm dark gray
                  marginBottom: "1.5rem"
                }}
                gutterBottom
              >
                I first developed a fascination for cloud computing during my
                initial internship in 2020, where I got the opportunity to work
                on Web applications using React and AWS. It was an enjoyable
                experience as it allowed me to see how cloud technology can
                provide software with a high level of flexibility and
                scalability.
              </Typography>
              <Typography
                component="h6"
                variant="subtitle1"
                align="left"
                sx={{
                  color: "#292524", // Warm dark gray
                  marginBottom: "1.5rem"
                }}
                gutterBottom
              >
                As of today, I possess a year of professional experience in
                creating cloud-native solutions utilizing AWS, as well as have
                obtained two AWS certifications. In the future, I aspire to
                expand my knowledge about a variety of cloud services, to
                advance my expertise in this field.
              </Typography>
              <Typography
                component="h6"
                variant="subtitle1"
                align="left"
                sx={{
                  color: "#292524", // Warm dark gray
                  marginBottom: "1.5rem"
                }}
                gutterBottom
              >
                Aside from my professional pursuits, I am passionate about
                photography. I take pleasure in capturing different landscapes
                and cityscapes, and often find myself discovering new
                perspectives through my camera lens. Additionally, I am a car
                enthusiast, which is another hobby of mine. I derive enjoyment
                from various car-related activities such as motorsport and car
                reviews, as well as driving.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={8} md={4}>
            <CardMedia
              sx={{
                width: "25vw", // Reduced from 35vw to 25vw
                margin: "0 auto", // Center the image
                '& img': {
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }
              }}
            >
              <img
                src={profilePic}
                width="80%" // Reduced from 90% to 80%
                alt="Edward Chen - University of British Columbia - Amazon Web Services"
                style={{ display: 'block', margin: '0 auto' }} // Ensure image is centered
              />
            </CardMedia>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
