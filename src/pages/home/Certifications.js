import { Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import BadgeCard from "../../components/cards/BadgeCard";
import aws_dva_001 from "../../assets/badges/aws-certified-developer-associate.png";
import aws_soa_001 from "../../assets/badges/aws-certified-solutions-architect-associate.png";
import aws_scp_002 from "../../assets/badges/aws-certified-security-specialty.png";
import aws_soa_c02 from "../../assets/badges/aws-certified-sysops-administrator-associate.png";
import aws_sap_c02 from "../../assets/badges/aws-certified-solutions-architect-professional.png";
import aws_mls_c01 from "../../assets/badges/aws-certified-machine-learning-specialty.png"
import aws_de1_c01 from "../../assets/badges/aws-certified-data-engineer-associate.png"
import aws_clf_c02 from "../../assets/badges/aws-certified-cloud-practitioner.png"
export default function Certifications() {
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
          Certifications
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={6} md={4}>
            <BadgeCard
                link={
                  "https://www.credly.com/badges/f1dc9b85-9853-41f4-8de9-40fee7cec4d5/public_url"
                }
                image={aws_sap_c02}
                title={"AWS Certified Solutions Architect – Professional"}
                content={
                  "Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals."
                }
            />
          </Grid>

          <Grid item sm={6} md={4}>
            <BadgeCard
              link={
                "https://www.credly.com/badges/079354bb-06ff-45e0-a143-2796c70f26a7/public_url"
              }
              image={aws_scp_002}
              title={"AWS Certified Security – Specialty"}
              content={
                "Earners of this certification have an in-depth understanding of AWS security services and the shared responsibility model (between AWS and the customer)."
              }
            />
          </Grid>
          <Grid item sm={6} md={4}>
            <BadgeCard
                link={
                  "https://www.credly.com/badges/4396604a-362d-4538-a552-c38e9046806a/public_url"
                }
                image={aws_mls_c01}
                title={"AWS Certified Machine Learning – Specialty"}
                content={
                  "Earners of this certification have an in-depth understanding of AWS machine learning (ML) services. They demonstrated ability to build, train, tune, and deploy ML models using the AWS Cloud."
                }
            />
          </Grid>
            <Grid item sm={6} md={4}>
                <BadgeCard
                    link={
                        "https://www.credly.com/badges/5823f8ee-4bd1-4b5f-aa03-f6e1a1f62e32/public_url"
                    }
                    image={aws_de1_c01}
                    title={"AWS Certified Data Engineer - Associate"}
                    content={"Earners of this certification have an in-depth understanding of how to use AWS services to implement data pipelines and to monitor, troubleshoot, and optimize cost and performance issues in accordance with best practices."
                    }
                />
            </Grid>

          <Grid item sm={6} md={4}>
            <BadgeCard
              link={
                "https://www.credly.com/badges/b8644ec9-355e-47d8-823a-dad0c5491105/public_url"
              }
              image={aws_soa_c02}
              title={"AWS Certified SysOps Administrator – Associate"}
              content={
                "Earners of this certification have a comprehensive understanding on how to deploy, manage, and operate IT systems on the AWS Cloud. They demonstrated the ability to migrate on-premises workloads to AWS and monitor, scale, and secure systems on the AWS platform."
              }
            />
          </Grid>

          <Grid item sm={6} md={4}>
            <BadgeCard
              link={
                "https://www.credly.com/badges/e48f5f5e-c23f-43a9-bf09-2fd19e0c30b2/public_url"
              }
              image={aws_dva_001}
              title={"AWS Certified Developer – Associate"}
              content={
                "Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices."
              }
            />
          </Grid>
          <Grid item sm={6} md={4}>
            <BadgeCard
              link={
                "https://www.credly.com/badges/77c23769-9490-40c4-aea3-cd370b3b81ed/public_url"
              }
              image={aws_soa_001}
              title={"AWS Certified Solutions Architect – Associate"}
              content={
                "Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices."
              }
            />
          </Grid>
            <Grid item sm={6} md={4}>
                <BadgeCard
                    link={
                        "https://www.credly.com/badges/cf95e170-db46-4011-949e-100db3de06c3/public_url"
                    }
                    image={aws_clf_c02}
                    title={"AWS Certified Cloud Practitioner"}
                    content={"Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge."
                    }
                />
            </Grid>

        </Grid>
      </Container>
    </div>
  );
}
