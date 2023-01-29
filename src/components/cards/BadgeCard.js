import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from "@mui/material";

export default function BadgeCard(props) {
    return (
        <Card sx={{maxWidth: 380, backgroundColor: "transparent", boxShadow: "none"}}>
            <CardActionArea onClick={() => window.open(props.link, "_blank")}>
                < CardMedia
                    component="img"
                    height="180"
                    image={props.image}
                    sx={{padding: "1em 1em 1em 1em", objectFit: "contain"}}

                />
                {/*<CardContent align={"left"}>*/}
                {/*<Typography gutterBottom align={"left"} variant="h6" component="div" sx={{color: "#FFFFFF"}}>*/}
                {/*    {props.title}*/}
                {/*</Typography>*/}
                {/*<Typography variant="body2" color="text.secondary" sx={{color: "#FFFFFF"}}>*/}
                {/*    {props.content}*/}
                {/*</Typography>*/}
                {/*</CardContent>*/}
            </CardActionArea>

            {/*<CardActions>*/
            }
            {/*    <IconButton size="large" sx={{color: "#FFFFFF"}}>*/
            }
            {/*        <GitHubIcon onClick={event => window.open(props.githubLink, "_blank")}/>*/
            }
            {/*    </IconButton>*/
            }
            {/*    {props.externalLink &&*/
            }
            {/*        <IconButton size="large" sx={{color: "#FFFFFF"}}>*/
            }
            {/*            <IosShareIcon onClick={event => window.open(props.externalLink, "_blank")}/>*/
            }
            {/*        </IconButton>*/
            }
            {/*    }*/
            }
            {/*</CardActions>*/
            }
        </Card>
    )
        ;
}
