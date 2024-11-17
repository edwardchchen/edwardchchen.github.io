import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PermanentDrawerLeft from "./components/Sidebar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Footer from "./pages/home/Footer";
import Blogs from "./pages/blogs/Blog";
const gradientBorder = {
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(45deg, #F97316, #D4A373)', // Terracotta to sand gradient
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
};

const themeDefault = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F97316', // Warm orange/terracotta
      light: '#FDBA74',
      dark: '#EA580C',
    },
    secondary: {
      main: '#D4A373', // Warm sand/caramel
      light: '#E9D8C4',
      dark: '#A47148',
    },
    background: {
      default: '#FFFBF5', // Warm white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#292524', // Warm dark gray
      secondary: '#57534E', // Lighter warm gray
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          transition: 'all 0.3s ease-in-out',
          ...gradientBorder,
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 32px rgba(249, 115, 22, 0.15)', // Softer shadow
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '12px 24px',
        },
      },
    },
  },
});




function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="App">
        <PermanentDrawerLeft />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
