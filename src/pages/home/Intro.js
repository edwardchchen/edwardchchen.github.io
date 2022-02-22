import {Container, Grid, Typography} from "@mui/material";

export default function Intro() {
    return (
        <div>
            <Container sx={{height: "90vh", width: "70vw", marginTop: "30vh"}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
                            Hi, my name is
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
                            Edward
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>
                            I am a fourth year Computer Science student at The University of British Columbia
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )

}