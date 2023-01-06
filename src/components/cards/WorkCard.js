import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Avatar, Container, Grid, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import List from "@mui/material/List";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Tag} from "../Tag";

var cardStyle = {
    display: 'block',
    width: '60vw',
    backgroundColor: "#1F2833",
    borderWidth: "5px",
    borderColor: "#66FCF1",
    boxShadow: "none"
}

export default function WorkCard(props) {

    return (
        <Box sx={{color: "#66FCF1", borderBottom: 3}}>
            <Card style={cardStyle}>
                <Grid container spacing={1}>
                    <Grid item lg={2}>
                        <CardMedia
                            component="img"
                            sx={{width: 90}}
                            image={props.image}
                        />
                    </Grid>
                    <Grid item lg={10}>
                        <Typography variant="subtitle1" align={"left"}>
                            {props.company}
                        </Typography>
                        <Typography variant="subtitle2" align={"left"}>
                            {props.jobTitle}
                        </Typography>
                        <Typography variant="subtitle2" align={"left"}>
                            {props.date}
                        </Typography>
                    </Grid>
                    <List align={"left"}>
                        {props.contents.map((bullet, index) =>
                            <ListItem align={"left"}>
                                <ArrowRightIcon/>
                                <Typography variant={"subtitle2"}>
                                    {bullet}
                                </Typography>
                            </ListItem>
                        )}
                    </List>
                    <Grid item lg={12} align={"left"} sx={{marginBottom: "20px"}}>
                        <Tag tags={props.tags}/>
                    </Grid>

                </Grid>
            </Card>
        </Box>
    );
}