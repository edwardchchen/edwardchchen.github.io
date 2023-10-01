import {Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import BadgeCard from "../../components/cards/BadgeCard";
import aws_dva_001 from "../../assets/badges/aws-certified-developer-associate.png";
import aws_soa_001 from "../../assets/badges/aws-certified-solutions-architect-associate.png";
import aws_scp_002 from "../../assets/badges/aws-certified-security-specialty.png";
export default function Certifications() {
    return (
        <div>
            <Container sx={{marginTop: "10vh"}}>
                <Typography component="h3" variant="h4" align="left" color="textPrimary" gutterBottom
                            sx={{color: "#66FCF1"}}>
                    Certifications
                </Typography>
                <Grid container spacing={3}>
                    <Grid item sm={6} md={4}>
                        <BadgeCard
                            link={"https://www.credly.com/badges/079354bb-06ff-45e0-a143-2796c70f26a7/public_url"}
                            image={aws_scp_002} title={"AWS Certified Security – Specialty"}
                            content={"Earners of this certification have an in-depth understanding of AWS security services and the shared responsibility model (between AWS and the customer)."}/>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BadgeCard
                            link={"https://www.credly.com/badges/e48f5f5e-c23f-43a9-bf09-2fd19e0c30b2/public_url"}
                            image={aws_dva_001} title={"AWS Certified Developer – Associate"}
                            content={"Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices."}/>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <BadgeCard
                            link={"https://www.credly.com/badges/77c23769-9490-40c4-aea3-cd370b3b81ed/public_url"}
                            image={aws_soa_001} title={"AWS Certified Solutions Architect – Associate"}
                            content={"Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices."}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}