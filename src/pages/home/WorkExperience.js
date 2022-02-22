import cat  from "../../assets/cat.png"
import {Container, Grid, Tabs, Typography} from "@mui/material";
import WorkCard from "../../components/cards/WorkCard";
import VerticalTabs from "../../components/WorkTabPanel";
export default function WorkExperience(){

    return(
        <Container maxWidth={"lg"}>
            <Typography align={"left"}>
                Where I have worked
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <VerticalTabs/>
                </Grid>
            </Grid>


        </Container>

    )
}