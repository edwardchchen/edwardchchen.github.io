import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import {Tag} from "../Tag";

export default function ProjectCard(props) {
    return (
        <Card sx={{maxWidth: 345, backgroundColor: "#0c181f"}}>
            <CardMedia
                component="img"
                height="180"
                image={props.image}
            />
            <CardContent align={"left"}>
                <Typography gutterBottom align={"left"} variant="h5" component="div" sx={{color: "#FFFFFF"}}>
                    {props.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.contents}
                </Typography>
                <Tag tags={props.tags}/>
            </CardContent>
            <CardActions>
                <IconButton size="large" sx={{color: "#FFFFFF"}}>
                    <GitHubIcon onClick={event => window.open(props.githubLink, "_blank")}/>
                </IconButton>
                {props.externalLink &&
                <IconButton size="large" sx={{color: "#FFFFFF"}}>
                    <IosShareIcon onClick={event => window.open(props.externalLink, "_blank")}/>
                </IconButton>
                }


            </CardActions>
        </Card>
    );
}
