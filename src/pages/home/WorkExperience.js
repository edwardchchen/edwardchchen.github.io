import cat  from "../../assets/cat.png"
import {Container, Grid, Typography} from "@mui/material";
import WorkCard from "../../components/cards/WorkCard";
import ubcLogo from "../../assets/logos/cicLogo.png";
export default function WorkExperience(){

    return(
        <Container maxWidth={"lg"}>
            <Typography>
                Professional Experience
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <WorkCard image={ubcLogo}/>
                </Grid>
            </Grid>


        </Container>

    )
}