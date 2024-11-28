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
  backgroundColor: "#1F2833",
  borderWidth: "5px",
  borderColor: "#66FCF1",
  boxShadow: "none",
};

export default function WorkCard(props) {
  return (
    <Box sx={{ color: "#66FCF1", borderBottom: 3 }}>
      <Card style={cardStyle}>
        <Grid container spacing={1}>
          <Grid item lg={2}>
            <Button onClick={() => window.open(props.companyLink, "_blank")}>
              <CardMedia
                component="img"
                sx={{ width: 90 }}
                image={props.image}
              ></CardMedia>
            </Button>
          </Grid>
          <Grid item lg={10}>
            <Typography variant="subtitle1" align={"left"}>
              {props.company}
            </Typography>
            <Typography variant="subtitle1" align={"left"}>
              {props.jobTitle}
            </Typography>
            <Typography variant="subtitle1" align={"left"}>
              {props.date}
            </Typography>
          </Grid>
          <List align={"left"}>
            {props.contents.map((bullet) => (
              <ListItem align={"left"}>
                <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                <Typography variant={"subtitle1"} marginLeft={"20px"}>
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
