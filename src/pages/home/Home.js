import Intro from "./Intro";
import Project from "./Project";
import WorkExperience from "./WorkExperience";
import Certifications from "./Certifications";
import AboutMe from "./AboutMe";


export default function Home() {
    return (
        <div>
            <Intro/>
            <AboutMe/>
            <WorkExperience/>
            <Project/>
            <Certifications/>
        </div>
    )

}