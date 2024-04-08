import { Container, Grid, Typography } from "@mui/material";
import WorkCard from "../../components/cards/WorkCard";
import awsLogo from "../../assets/logos/awsLogo.png";
import * as React from "react";
import ubcLogo from "../../assets/logos/cicLogo.png";

export default function WorkExperience() {
  const cicTags = ["React", "AWS", "Javascript", "CSS"];

  return (
    <div>
      <Container sx={{ marginTop: "10vh" }}>
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="textPrimary"
          gutterBottom
          sx={{ color: "#66FCF1" }}
        >
          Where I have worked
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WorkCard
              image={awsLogo}
              company={"Amazon Web Services"}
              jobTitle={"Cloud Consultant, Professional Services"}
              date={"Jul 2023 - Current"}
              contents={[
                  "Collaborated with Canadian public sector customers to migrate/re-architect their on-premise solutions to cloud-based applications following AWS best practices",
                  "Assisted clients in re-architecting a data application, transitioning customer’s on-premise data processing application into a serverless Data Lake, implemented a business intelligence tool with AI capabilities",
                  "Provided comprehensive customer training and documentation on multi-region deployment strategies and recommended security configurations in the cloud"

              ]}
              tags={[]}
              companyLink={"https://aws.amazon.com/"}
            />
          </Grid>

          <Grid item xs={12}>
            <WorkCard
              image={awsLogo}
              company={"Amazon Web Services"}
              jobTitle={"Consultant Intern, Professional Services"}
              date={"Jun 2022 - Sep 2022"}
              contents={[
                  "Built a secure, scalable Data Lake solution on AWS that contains a serverless ETL data pipeline, data warehouse and visualization dashboard",
                  "Streamlined deployment process by developing AWS CloudFormation templates, enabling easy replication of the solution across multiple AWS accounts",
                "Gained technical consulting expertise through comprehensive training sessions and simulated customer engagements"
              ]}
              tags={["AWS", "Severless"]}
              companyLink={"https://aws.amazon.com/"}
            />
          </Grid>
          <Grid item xs={12}>
            <WorkCard
              image={ubcLogo}
              company={"UBC Cloud Innovation Centre, powered by AWS"}
              companyLink={"https://cic.ubc.ca/"}
              jobTitle={"Full Stack Developer Intern"}
              date={"Jan 2021 - Aug 2021"}
              contents={[
                  "Co-developed the Student Connect App, a React web application leveraging AWS services including OpenSearch, DynamoDB, Cognito, and Amplify. This platform provided students with a data aggregation and recommendation system to enhance their academic experience",
"Developed an Amazon Location Service Project, a React web application showcasing the features of the Amazon Location Service. This application can be easily deployed and hosted across multiple AWS accounts using AWS CloudFormation and AWS Amplify",
                  "Lead an Introduction to AWS RoboMaker Webinar, provided guidance on utilizing AWS RoboMaker for robotics development and simulation"
              ]}
              tags={cicTags}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
