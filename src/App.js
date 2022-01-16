import logo from './logo.svg';
import './App.css';
import {HashRouter, Redirect, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import PermanentDrawerLeft from "./components/Sidebar";


function App() {
  return (
    <div className="App">
          <PermanentDrawerLeft/>
          <Routes>
              <Route path="/" element={<Home />}/>
          </Routes>

    </div>
  );
}

export default App;
