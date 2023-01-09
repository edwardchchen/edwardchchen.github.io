import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

function Copyright() {
    return (
        <Typography
            variant="body2"
            color="white"
            align="center"
        >
            {"Designed and built by Edward Chen, Copyright © "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container sx={{marginTop: "15vh", marginBottom: "5vh"}}>
            <Copyright/>
        </Container>
    )
}
