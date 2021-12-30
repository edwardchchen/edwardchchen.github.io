import {Container, Typography} from "@mui/material";

export default function Intro(){
    return(
        <div>
            <Container maxWidth="lg">
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Hi, I am Edward, a fourth year CS student @ UBC
                </Typography>
            </Container>

        </div>
    )

}