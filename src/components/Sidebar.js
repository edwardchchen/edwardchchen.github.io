import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from '../assets/files/resume.pdf';

const drawerWidth = 0;
const githubLink = process.env.REACT_APP_GITHUB_URL;
const linkedInLink = process.env.REACT_APP_LINKEDIN_URL;

var resumeBtn = {
    textTransform: 'none',
    fontSize: '15px',
    fontWeight: "500",
    background: '#45A29E',
    marginLeft: "13px",
    borderRadius: 3,
    border: 0,
    color: "white",
    '&:hover': {color: 'black',}
}


export default function PermanentDrawerLeft() {
    // const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    return (
        <Box sx={{display: 'flex', backgroundColor: "#1F2833"}}>
            <CssBaseline/>
            <Box sx={{flexGrow: 1, backgroundColor: "#1F2833"}}>
                <AppBar
                    position="fixed"
                    sx={{
                        width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "#1F2833",
                        boxShadow: "None"
                    }}
                >
                    <Toolbar>
                        <Button
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{textTransform: 'none', color: "#FFFFFF", '&:hover': {color: '#66FCF1',}}}
                        >
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Edward Chen
                            </Typography>
                        </Button>

                        <Button sx={{color: "#FFFFFF", '&:hover': {color: '#171515',}}}>
                            <GitHubIcon fontSize={"large"} onClick={() => window.open(githubLink, "_blank")}/>
                        </Button>
                        <Button sx={{color: "#FFFFFF", '&:hover': {color: '#0077B5',}}}>
                            < LinkedInIcon fontSize={"large"} onClick={() => window.open(linkedInLink, "_blank")}/>
                        </Button>
                        <Button style={resumeBtn}
                                onClick={() => window.open(Resume, "_blank")}>
                            Resume
                        </Button>

                    </Toolbar>

                </AppBar>
            </Box>
        </Box>
    );
}
