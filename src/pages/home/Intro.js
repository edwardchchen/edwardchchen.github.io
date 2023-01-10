import {Container, Grid, Typography} from "@mui/material";
import goKart from "../../assets/go-kart.png";
import CardMedia from "@mui/material/CardMedia";

export default function Intro() {
    return (
        <div>
            <Container sx={{marginTop: "15vh"}}>
                <Grid container>
                    <Grid item xs={8}>

                        <Grid item xs={12}>
                            <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
                                HELLO! I am
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom
                                        sx={{color: "#66FCF1"}}>
                                Edward Chen
                            </Typography>
                        </Grid>
                        {/*<Grid item xs={10}>*/}
                        {/*    <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>*/}
                        {/*        I am currently a fifth year Computer Science student at The University of British*/}
                        {/*        Columbia. I have a strong interest in cloud computing and software development,*/}
                        {/*        and I am excited to begin exploring career opportunities in these fields.*/}
                        {/*    </Typography>*/}
                        {/*</Grid>*/}
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia sx={{height: "50vh", borderRadius: "15px"}} image={goKart}/>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )

}