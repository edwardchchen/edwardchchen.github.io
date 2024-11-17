import ProjectCard from "../../components/cards/ProjectCard";
import { Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import covidTracker from "../../assets/projectImages/covidTracker.png";
import drinkWater from "../../assets/projectImages/drinkWater.png";
import todoList from "../../assets/projectImages/todoList.png";
import database_query from "../../assets/projectImages/nba-database-filter-by-players.png";
import campus_explorer from "../../assets/projectImages/room-explorer-query.png";
import amazon_location from "../../assets/projectImages/aws-location-screenshot.png";
import student_connect_app from "../../assets/projectImages/student-connect-app.png";

export default function Project() {
  return (
    <div style={{ backgroundColor: '#FFFBF5' }}> {/* Added warm white background */}
      <Container sx={{ marginTop: "10vh" }}>
        <Typography
          component="h3"
          variant="h4"
          align="left"
          sx={{ 
            color: "#F97316", // Terracotta color
            fontWeight: 600,
            marginBottom: "2rem"
          }}
          gutterBottom
        >
          Some things I've built
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"Amazon Location Service Demo"}
              image={amazon_location}
              contents={
                "During my internship with the UBC Cloud Innovation Centre, I have helped to develop this project. This is a demo that showcases the many capabilities of Amazon Location Service. With features such as maps, places, routes, and geofencing, it provides a comprehensive look at the capabilities of this powerful service. The app allows users to visualize location information, perform geocoding and reverse geocoding, calculate routes with various transportation and departure options, and create, list, and delete geofences. Whether you're a developer looking to integrate location services into your app or a user interested in exploring the capabilities of Amazon Location Service, this demo is a great way to get started."
              }
              tags={["Web", "ReactJS", "AWS"]}
              githubLink={
                "https://github.com/UBC-CIC/Amazon-Location-Service-Demo"
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"Student Connect App"}
              image={student_connect_app}
              contents={
                "During my internship with the UBC Cloud Innovation Centre, I had the opportunity to develop this prototype along with other interns. The project connects first-year university students to their preferred activities, clubs, and campus news feeds, tailored to each student's interest.(UBC Cloud Innovation Centre)"
              }
              tags={["Web", "ReactTS", "AWS"]}
              githubLink={"https://github.com/UBC-CIC/Student-Connect-App"}
              externalLink={
                "https://cic.ubc.ca/project/ubc-okanagan-student-connect-application/"
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"UBC Courses and Rooms Explorer"}
              image={campus_explorer}
              contents={
                "UBC Courses and Rooms Explorer is a ReactTS based web application. It allows users to access valuable data about courses, including class averages, standard deviations, and fail rates. Additionally, the app provides information about classrooms, such as seating capacity, room type, and descriptions. This app allows the users to make informed decisions about their academic pursuits."
              }
              tags={["Web", "ReactTS", "JUnit", "REST API"]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"NBA Stats Database"}
              image={database_query}
              contents={
                "The NBA Stats database is an invaluable resource for anyone interested in the inner workings of the National Basketball Association (NBA). With a backend Oracle SQL database and a JavaSwing frontend, the database provides a wealth of statistical information about teams and players, including averages, 3-pointers attempted and made, steals, and blocks. It is a useful tool for the NBA fans."
              }
              tags={["Java", "Java Swing", "OracleDB", "SQL"]}
              githubLink={
                "https://github.com/edwardchchen/Basketball-Database-Project"
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"iOS Covid-19 Dashboard"}
              image={covidTracker}
              contents={
                "This iOS app provides daily data on confirmed cases, deaths, and recoveries from the COVID-19 pandemic. The app allows the user to view these cases by country. It was developed using Swift 5 and has been tested on an iPhone XR running iOS 13.1"
              }
              tags={["iOS", "Swift", "Charts", "SwiftyJson"]}
              githubLink={"https://github.com/edwardchchen/COVID-19-iOS"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"Drink Water"}
              image={drinkWater}
              contents={
                "This iOS app helps users stay hydrated by reminding them to drink water at regular intervals throughout the day. With customizable notifications delivered via the phone's notification center, the app makes it easy for users to stay on track with their hydration goals. Simply set the desired frequency of reminders and the time frame for receiving them, and the app will do the rest!"
              }
              tags={["iOS", "Swift", "Mobile", "Notification"]}
              githubLink={"https://github.com/edwardchchen/DrinkWater"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProjectCard
              projectName={"Todo List"}
              image={todoList}
              contents={
                "The Todolist application is a simple yet effective tool for managing and organizing tasks. Written in Java, the app uses a JavaFx frontend to display upcoming tasks added by the user. "
              }
              tags={["Java", "JavaFx", "JUnit", "OpenWeather API"]}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
