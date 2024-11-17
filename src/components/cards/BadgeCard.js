import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

export default function BadgeCard(props) {
  return (
    <Card 
      sx={{
        height: "100%",
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
      <CardActionArea
        onClick={() => window.open(props.link, "_blank")}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <CardMedia
            component="img"
            image={props.image}
            alt={props.title}
            sx={{
              width: "180px",
              height: "180px",
              objectFit: "contain",
            }}
          />
        </Box>
        <CardContent sx={{ padding: "0 24px 24px 24px" }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{
              color: "#F97316",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
