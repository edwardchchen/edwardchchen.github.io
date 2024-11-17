import Button from "@mui/material/Button";

const StyledButton = {
  background: "#FFF7ED", // Light orange/warm background
  borderRadius: "8px",
  border: "1px solid #FB923C", // Lighter terracotta border
  color: "#EA580C", // Darker terracotta text for better contrast
  height: "28px", // Slightly taller
  padding: "4px 16px", // More horizontal padding
  marginRight: "8px",
  marginTop: "8px",
  "&:hover": {
    background: "#FB923C", // Lighter terracotta background on hover
    color: "#FFFFFF", // White text on hover
    border: "1px solid #FB923C",
  },
  textTransform: "none",
  fontSize: "13px", // Slightly larger font
  fontWeight: "600", // Bolder text
  boxShadow: "0 2px 4px rgba(249, 115, 22, 0.1)", // Subtle shadow
  transition: "all 0.3s ease-in-out",
  letterSpacing: "0.2px", // Slightly increased letter spacing
};

export function Tag(props) {
  const { tags } = props;
  return tags ? (
    <>
      {tags.map((category, index) => (
        <Button 
          style={StyledButton} 
          key={`tag-${index}`}
          disableElevation
        >
          {category}
        </Button>
      ))}
    </>
  ) : null;
}
