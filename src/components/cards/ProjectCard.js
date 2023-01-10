import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Tag} from "../Tag";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCard(props) {
    return (
        <Card sx={{maxWidth: 380, backgroundColor: "#0c181f"}}>
            <CardMedia
                component="img"
                height="180"
                image={props.image}
            />
            <Accordion sx={{
                backgroundColor: "transparent",
                border: "none"
            }}
                       align={'left'}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">{props.projectName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                        {props.contents}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*<Typography gutterBottom align={"left"} variant="h5" component="div" sx={{color: "#FFFFFF"}}>*/}
            {/*    {props.projectName}*/}
            {/*</Typography>*/}
            {/*<Typography variant="body2" color="white">*/}
            {/*    {props.contents}*/}
            {/*</Typography>*/}
            <CardContent align={"left"}>

                <Tag tags={props.tags}/>

            </CardContent>
            <CardContent align={"left"}>
                <Button sx={{color: "#FFFFFF", '&:hover': {color: 'gray',}}}>
                    <GitHubIcon size="large" onClick={() => window.open(props.githubLink, "_blank")}/>
                </Button>
                {props.externalLink &&
                    <Button sx={{color: "#FFFFFF", '&:hover': {color: 'gray',}}}>
                        <LanguageIcon size="large" onClick={() => window.open(props.externalLink, "_blank")}/>
                    </Button>
                }

            </CardContent>

        </Card>
    );
}
