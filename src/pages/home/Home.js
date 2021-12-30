import {Container, Grid, Typography} from "@mui/material";
import Intro from "./Intro";
import Project from "./Project";
import WorkExperience from "./WorkExperience";
import ProjectCard from "../../components/cards/ProjectCard";
import cat from "../../assets/cat.png";
import WorkCard from "../../components/cards/WorkCard";

export default function Home(){
    return(
        <div>
            <Intro/>
            <WorkExperience/>
            <Project/>

        </div>
    )

}