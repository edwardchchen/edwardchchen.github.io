import logo from './logo.svg';
import './App.css';
import {HashRouter, Redirect, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import PermanentDrawerLeft from "./components/Sidebar";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

const themeDefault = createTheme({
    palette: {
        background: {
            default: "#1F2833"
        },
        text: {
            primary: "#FFFFFF"
        }
    }
});

function App() {
  return (
      <ThemeProvider theme={themeDefault}>
          <div className="App">
              <PermanentDrawerLeft/>
              <Routes>
                  <Route path="/" element={<Home />}/>
              </Routes>
          </div>
      </ThemeProvider>

  );
}

export default App;
