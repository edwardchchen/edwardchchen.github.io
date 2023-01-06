import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkCard from "./cards/WorkCard";
import awsLogo from "../assets/logos/awsLogo.png";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{bgcolor: 'background.paper', display: 'flex'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                width={"500px"}
                value={value}
                onChange={handleChange}
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Amazon Web Services" {...a11yProps(0)} />
                <Tab label="UBC" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <WorkCard image={awsLogo} company={"Amazon Web Services"}
                          jobTitle={"Professional Services Consultant Intern"} date={"Jun 2022 - Sep 2022"}
                          contents={[" Built a secure Data Lake solution that contains a serverless ETL Pipeline, data warehouse and data visualization dashboard using AWS Glue, Redshift, S3, KMS and QuickSight.",
                              "The above solution can easily be deployed into another AWS account using AWS Cloudformation",
                              "Developed technical consulting experience through training and mock customer meetings",
                              "Successfully obtained AWS Developer Associate Certificate (DVA-C01)"]}
                          tags={["AWS", "Severless"]}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                UBC
            </TabPanel>
        </Box>
    );
}