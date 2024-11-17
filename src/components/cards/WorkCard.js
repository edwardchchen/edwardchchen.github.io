import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, ListItem } from "@mui/material";
import List from "@mui/material/List";
import { Tag } from "../Tag";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Button from "@mui/material/Button";

let cardStyle = {
  display: "block",
  width: "60vw",
  backgroundColor: "#FFFFFF", // Changed to white background
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(249, 115, 22, 0.1)", // Soft shadow with terracotta tint
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 32px rgba(249, 115, 22, 0.15)",
  }
};

export default function WorkCard(props) {
  return (
    <Box sx={{ color: "#292524", marginBottom: 3 }}> {/* Changed text color to warm dark gray */}
      <Card style={cardStyle}>
        <Grid container spacing={1}>
          <Grid item lg={2}>
            <Button onClick={() => window.open(props.companyLink, "_blank")}>
              <CardMedia
                component="img"
                sx={{ 
                  width: 90,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
                image={props.image}
              ></CardMedia>
            </Button>
          </Grid>
          <Grid item lg={10}>
            <Typography 
              variant="subtitle1" 
              align={"left"} 
              sx={{ color: "#F97316" }} // Primary terracotta color for company name
            >
              {props.company}
            </Typography>
            <Typography 
              variant="subtitle1" 
              align={"left"}
              sx={{ color: "#292524" }} // Warm dark gray for job title
            >
              {props.jobTitle}
            </Typography>
            <Typography 
              variant="subtitle1" 
              align={"left"}
              sx={{ color: "#57534E" }} // Lighter warm gray for date
            >
              {props.date}
            </Typography>
          </Grid>
          <List align={"left"}>
            {props.contents.map((bullet) => (
              <ListItem align={"left"}>
                <FiberManualRecordIcon 
                  sx={{ 
                    fontSize: 10,
                    color: "#D4A373" // Secondary sand color for bullets
                  }} 
                />
                <Typography 
                  variant={"subtitle1"} 
                  marginLeft={"20px"}
                  sx={{ color: "#292524" }} // Warm dark gray for bullet points
                >
                  {bullet}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Grid item lg={12} align={"left"} sx={{ marginBottom: "20px" }}>
            <Tag tags={props.tags} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
