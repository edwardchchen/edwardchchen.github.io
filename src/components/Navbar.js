import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const githubLink = process.env.REACT_APP_GITHUB_URL;
const linkedInLink = process.env.REACT_APP_LINKEDIN_URL;

export default function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Edward Chen
                        </Typography>
                    </IconButton>
                    <Button color="inherit">Resume</Button>
                    <IconButton sx={{color: "#FFFFFF"}}>
                        <GitHubIcon fontSize={"large"} onClick={event => window.open(githubLink, "_blank")}
                        />
                    </IconButton>
                    <IconButton sx={{color: "#FFFFFF"}}>
                        < LinkedInIcon fontSize={"large"} onClick={event => window.open(linkedInLink, "_blank")}/>
                    </IconButton>

                </Toolbar>

            </AppBar>
        </Box>
    );
}