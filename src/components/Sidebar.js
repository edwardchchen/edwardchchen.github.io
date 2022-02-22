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
import EmailIcon from '@mui/icons-material/Email';
const drawerWidth = 100;
const githubLink = process.env.REACT_APP_GITHUB_URL;
const linkedInLink = process.env.REACT_APP_LINKEDIN_URL;

export default function PermanentDrawerLeft() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Edward Chen
                            </Typography>
                        </IconButton>
                        <Button color="inherit">Resume</Button>

                    </Toolbar>

                </AppBar>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <List>
                    <IconButton>
                        <GitHubIcon fontSize={"large"} onClick={event =>  window.open(githubLink, "_blank")}
                        />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon fontSize={"large"} onClick={event =>  window.open(linkedInLink, "_blank")}/>
                    </IconButton>
                    {/*<IconButton>*/}
                    {/*    <EmailIcon fontSize={"large"}/>*/}
                    {/*</IconButton>*/}
                </List>
            </Drawer>
        </Box>
    );
}
