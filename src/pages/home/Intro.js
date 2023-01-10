import {Container, Grid, Typography} from "@mui/material";

export default function Intro() {
    return (
        <div>
            <Container sx={{marginTop: "15vh"}}>
                <Grid container>
                    <Grid item xs={8}>

                        <Grid item xs={12}>
                            <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
                                Hi! My name is
                            </Typography>
                            <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom
                                        sx={{color: "#66FCF1"}}>
                                Edward Chen
                            </Typography>
                            <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
                                I am a fifth year Computer Science student at The University of British Columbia,
                                aspiring to become a Cloud Architect.
                            </Typography>

                        </Grid>
                        {/*<Grid item xs={12}>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={10}>*/}
                        {/*    <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>*/}
                        {/*        I am currently a fifth year Computer Science student at The University of British*/}
                        {/*        Columbia. I have a strong interest in cloud computing and software development,*/}
                        {/*        and I am excited to begin exploring career opportunities in these fields.*/}
                        {/*    </Typography>*/}
                        {/*</Grid>*/}
                    </Grid>
                    {/*<Grid item xs={4}>*/}
                    {/*    <CardMedia sx={{height: "50vh", borderRadius: "15px"}} image={goKart}/>*/}
                    {/*</Grid>*/}
                </Grid>
            </Container>

        </div>
    )

}