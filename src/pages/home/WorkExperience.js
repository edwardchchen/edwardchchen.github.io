import {Container, Grid, Typography} from "@mui/material";
import WorkCard from "../../components/cards/WorkCard";
import awsLogo from "../../assets/logos/awsLogo.png";
import * as React from "react";
import ubcLogo from "../../assets/logos/cicLogo.png";

export default function WorkExperience() {
    const cicTags = ["React", "AWS", "Javascript", "CSS"]

    return (
        <div>
            <Container sx={{marginTop: "10vh"}}>
                <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                            sx={{color: "#66FCF1"}}>
                    Where I have worked
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <WorkCard image={awsLogo} company={"Amazon Web Services"}
                                  jobTitle={"Professional Services Cloud Consultant"} date={"Current"}
                                  contents={[]}
                                  tags={[]}
                                  companyLink={"https://aws.amazon.com/"}/>

                    </Grid>

                    <Grid item xs={12}>
                        <WorkCard image={awsLogo} company={"Amazon Web Services"}
                                  jobTitle={"Professional Services Consultant Intern"} date={"Jun 2022 - Sep 2022"}
                                  contents={[" Built a secure Data Lake solution that contains a serverless ETL Pipeline, data warehouse and data visualization dashboard using AWS Glue, Redshift, S3, KMS and QuickSight.",
                                      "Developed technical consulting experience through training and mock customer meetings",
                                      "Successfully obtained AWS Developer Associate Certificate (DVA-C01)"]}
                                  tags={["AWS", "Severless"]}
                                  companyLink={"https://aws.amazon.com/"}/>

                    </Grid>
                    <Grid item xs={12}>
                        <WorkCard image={ubcLogo} company={"UBC Cloud Innovation Centre, powered by AWS"}
                                  companyLink={"https://cic.ubc.ca/"}
                                  jobTitle={"Full Stack Developer Intern"} date={"Jan 2021 - Aug 2021"}
                                  contents={["Co-developed Student Connect App, React web application that used AWS services (OpenSearch, DynamoDB, Cognito, Amplify) to provide data aggregation and recommendation platform for students",
                                      "Developed Amazon Location Service Demo, React web application that showcases all the features for Location Service, can easily be deployed and hosted into multiple AWS accounts using AWS CloudFormation and AWS Amplify",
                                      "Wrote documentation on the architecture, pricing and deployment of the projects",
                                      "Lead an Introduction to AWS RoboMaker Webinar, taught participants how to launch and visualize Robot simulation on the AWS RoboMaker Console"]}
                                  tags={cicTags}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}