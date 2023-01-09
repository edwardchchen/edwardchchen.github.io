import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {Container} from "@mui/material";
import ProjectCard from "./cards/ProjectCard";


function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function ProjectTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Lottery analyzer" {...a11yProps(0)} />
                <Tab label="Todo List" {...a11yProps(1)} />
                <Tab label="NBA Stats" {...a11yProps(2)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <Container maxWidth={"xl"}>
                    <ProjectCard company={"Amazon Web Services"}
                                 jobTitle={"Professional service consultant intern"} date={"Jun 2022 - Sep 2022"}
                                 contents={[]} tags={["Python", "Python turtle"]}/>

                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth={"xl"}>
                    <ProjectCard company={"Amazon Web Services"}
                                 jobTitle={"Professional service consultant intern"} date={"Jun 2022 - Sep 2022"}
                                 contents={[]} tags={["Java", "JavaFx", "CSS"]}/>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth={"xl"}>
                    <ProjectCard company={"Amazon Web Services"}
                                 jobTitle={"Professional service consultant intern"} date={"Jun 2022 - Sep 2022"}
                                 contents={[]} tags={["Java", "Java Swing", "OracleDB", "SQL"]}/>
                </Container>
            </TabPanel>

        </Box>
    );
}
