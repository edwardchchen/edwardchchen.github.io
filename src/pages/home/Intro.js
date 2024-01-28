import { Container, Fade, Grid, Typography } from "@mui/material";

export default function Intro() {
  return (
    <div>
      <Container sx={{ marginTop: "35vh", marginBottom: "35vh" }}>
        <Grid container>
          <Grid item xs={8}>
            <Fade in={true} timeout={5000}>
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  variant="h3"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  Hi! My name is
                </Typography>

                <Typography
                  component="h1"
                  variant="h3"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                  sx={{ color: "#66FCF1" }}
                >
                  Edward Chen
                </Typography>

                <Typography
                  component="h1"
                  variant="h5"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  Cloud consultant @ Amazon Web Services / UBC alumni
                </Typography>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
