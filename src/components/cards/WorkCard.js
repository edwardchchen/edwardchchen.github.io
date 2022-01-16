import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Container, Grid} from "@mui/material";
var cardStyle = {
    display: 'block',
    width: '60vw',
    transitionDuration: '0.3s',
    border: "none",
    boxShadow: "none"
}

export default function WorkCard(props) {
    const theme = useTheme();

    return (
        <Card style={cardStyle}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <CardMedia
                        component="img"
                        sx={{ width: 90 }}
                        image={props.image}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography  variant="subtitle1" align={"left"}>
                        {props.company}
                    </Typography>
                    <Typography  variant="subtitle2" align={"left"}>
                        {props.jobTitle}
                    </Typography>
                    <Typography  variant="subtitle2" align={"left"}>
                            {props.date}
                        </Typography>
                </Grid>


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                </CardContent>
            </Box>
            </Grid>
        </Card>
    );
}