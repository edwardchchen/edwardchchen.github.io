import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Tag } from "../Tag";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";

export default function ProjectCard(props) {
  return (
    <Card 
      sx={{ 
        maxWidth: 380, 
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(249, 115, 22, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 32px rgba(249, 115, 22, 0.15)",
        },
      }}
    >
      <CardMedia>
        <img 
          height="180" 
          src={props.image} 
          alt={props.projectName}
          style={{ 
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px"
          }} 
        />
      </CardMedia>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          "&:before": {
            display: "none" // Removes the default divider
          }
        }}
        align={"left"}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#F97316" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#292524",
              fontWeight: 600
            }}
          >
            {props.projectName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography 
            variant="body1"
            sx={{ color: "#57534E" }}
          >
            {props.contents}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <CardContent align={"left"}>
        <Tag tags={props.tags} />
      </CardContent>
      <CardContent 
        align={"left"}
        sx={{
          display: "flex",
          gap: "8px"
        }}
      >
        {props.githubLink && (
          <Button
            sx={{ 
              color: "#292524",
              "&:hover": { 
                color: "#F97316",
                backgroundColor: "rgba(249, 115, 22, 0.04)"
              }
            }}
            onClick={() => window.open(props.githubLink, "_blank")}
          >
            <GitHubIcon size="large" />
          </Button>
        )}
        {props.externalLink && (
          <Button
            sx={{ 
              color: "#292524",
              "&:hover": { 
                color: "#F97316",
                backgroundColor: "rgba(249, 115, 22, 0.04)"
              }
            }}
            onClick={() => window.open(props.externalLink, "_blank")}
          >
            <LanguageIcon size="large" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
