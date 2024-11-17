import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Resume from "../assets/files/resume.pdf";
import InstagramIcon from "@mui/icons-material/Instagram";
import edwardLogo from "../assets/logos/edward-logo.png";

const drawerWidth = 0;
const githubLink = process.env.REACT_APP_GITHUB_URL;
const linkedInLink = process.env.REACT_APP_LINKEDIN_URL;
const email = process.env.REACT_APP_EMAIL;
const instagramLink = process.env.REACT_APP_INSTAGRAM;

const resumeBtn = {
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "500",
  background: "#F97316",
  marginLeft: "20px",
  borderRadius: "12px",
  border: 0,
  color: "white",
  padding: "10px 24px",
  "&:hover": { 
    background: "#FB923C",
    transform: "translateY(-2px)",
    transition: "all 0.3s ease-in-out"
  },
};

const iconButtonStyle = {
  color: "#292524",
  margin: "0 8px",
  padding: "12px",
  borderRadius: "12px",
  backgroundColor: "#FFF7ED",
  "&:hover": { 
    backgroundColor: "#FED7AA",
    transform: "translateY(-2px)",
    transition: "all 0.3s ease-in-out"
  }
};

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#FFF7ED" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, backgroundColor: "#FFF7ED" }}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: "#FED7AA",
            boxShadow: "0 4px 20px rgba(249, 115, 22, 0.1)",
            height: "80px", // Increased height
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar sx={{ height: "100%" }}>
            <Button
              size="large"
              edge="start"
              aria-label="menu"
              sx={{
                textTransform: "none",
                color: "#292524",
                marginRight: "20px",
                "&:hover": { 
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease-in-out"
                },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 45,
                  width: 45,
                }}
                alt="Edward Logo"
                src={edwardLogo}
              />
            </Button>

            <Button
              sx={{ 
                ...iconButtonStyle,
                "&:hover": { 
                  ...iconButtonStyle["&:hover"],
                  color: "#292524",
                }
              }}
              onClick={() => window.open(githubLink, "_blank")}
            >
              <GitHubIcon sx={{ fontSize: 28 }} />
            </Button>
            <Button
              sx={{ 
                ...iconButtonStyle,
                "&:hover": { 
                  ...iconButtonStyle["&:hover"],
                  color: "#0077B5",
                }
              }}
              onClick={() => window.open(linkedInLink, "_blank")}
            >
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </Button>
            <Button
              sx={{ 
                ...iconButtonStyle,
                "&:hover": { 
                  ...iconButtonStyle["&:hover"],
                  color: "#fd5949",
                }
              }}
              onClick={() => window.open(instagramLink, "_blank")}
            >
              <InstagramIcon sx={{ fontSize: 28 }} />
            </Button>

            <Button
              sx={{ 
                ...iconButtonStyle,
                "&:hover": { 
                  ...iconButtonStyle["&:hover"],
                  color: "#F97316",
                }
              }}
              onClick={() => (window.location = "mailto:" + email)}
            >
              <EmailIcon sx={{ fontSize: 28 }} />
            </Button>

            <Button
              sx={resumeBtn}
              onClick={() => window.open(Resume, "_blank")}
            >
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
