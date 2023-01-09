import Intro from "./Intro";
import Project from "./Project";
import WorkExperience from "./WorkExperience";
import Certifications from "./Certifications";


export default function Home() {
    return (
        <div>
            <Intro/>
            <WorkExperience/>
            <Project/>
            <Certifications/>
        </div>
    )

}