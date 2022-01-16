import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkCard from "./cards/WorkCard";
import ubcLogo from "../assets/logos/cicLogo.png";
import awsLogo from "../assets/logos/awsLogo.png";

import {Container} from "@mui/material";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="AWS" {...a11yProps(0)} />
                <Tab label="UBC" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Container maxWidth={"xl"}>
                <WorkCard image={awsLogo} company={"Amazon Web Services"}
                          jobTitle={"Professional service consultant intern"} date={"Jun 2022 - Sep 2022"}/>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth={"xl"}>
                    <WorkCard image={ubcLogo} company={"UBC Cloud Innovation Centre, powered by AWS"}
                              jobTitle={"Developer Intern"} date={"Jan 2021 - Aug 2021"}/>
                </Container>
            </TabPanel>
        </Box>
    );
}
