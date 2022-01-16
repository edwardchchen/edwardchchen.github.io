import {Container, Typography} from "@mui/material";

export default function Intro(){
    return(
        <div>
            <Container maxWidth="lg">
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Hi, I am Edward
                </Typography>
                <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>
                    I am a fourth year Computer Science student at The University of British Columbia who is very
                    interested in cloud computing and architecture.
                </Typography>

            </Container>

        </div>
    )

}