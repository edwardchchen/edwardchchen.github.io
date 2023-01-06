import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "./Navbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const drawerWidth = 80;
const githubLink = process.env.REACT_APP_GITHUB_URL;
const linkedInLink = process.env.REACT_APP_LINKEDIN_URL;


export default function PermanentDrawerLeft() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
            {/*<Drawer*/}
            {/*    sx={{*/}
            {/*        width: drawerWidth,*/}
            {/*        backgroundColor: "#1F2833",*/}
            {/*        flexShrink: 0,*/}
            {/*        '& .MuiDrawer-paper': {*/}
            {/*            width: drawerWidth,*/}
            {/*            boxSizing: 'border-box',*/}
            {/*            borderColor: "#66FCF1",*/}
            {/*            borderWidth: "4px",*/}
            {/*            backgroundColor: "#1F2833",*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    variant="permanent"*/}
            {/*    anchor="left"*/}
            {/*>*/}
            {/*    <Toolbar sx={{backgroundColor: "#1F2833"}}/>*/}
            {/*    <List sx={{backgroundColor: "#1F2833"}}>*/}
            {/*        <IconButton sx={{color: "#FFFFFF"}}>*/}
            {/*            <GitHubIcon fontSize={"large"} onClick={event => window.open(githubLink, "_blank")}*/}
            {/*            />*/}
            {/*        </IconButton>*/}
            {/*        <IconButton sx={{color: "#FFFFFF"}}>*/}
            {/*            < LinkedInIcon fontSize={"large"} onClick={event => window.open(linkedInLink, "_blank")}/>*/}
            {/*        </IconButton>*/}
            {/*        /!*<IconButton>*!/*/}
            {/*        /!*    <EmailIcon fontSize={"large"}/>*!/*/}
            {/*        /!*</IconButton>*!/*/}
            {/*    </List>*/}
            {/*</Drawer>*/}
        </Box>
    );
}
