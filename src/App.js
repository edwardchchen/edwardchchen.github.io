import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import PermanentDrawerLeft from "./components/Sidebar";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Footer from "./pages/home/Footer";
import Blogs from "./pages/blogs/Blog";

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
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                </Routes>
                <Footer/>

            </div>
        </ThemeProvider>

    );
}

export default App;