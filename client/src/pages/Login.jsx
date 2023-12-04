import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Signup from "../components/SignUp";
import SignIn from "../components/SignIn";

const Login = () => {
    const [tab, setTab] = useState("1");

    const handleChange = (e, newValue) => {
        setTab(newValue);
    };

    return (
        <>
            <TabContext value={tab}>
                <TabList onChange={handleChange} className="flex" centered>
                    <Tab
                        label="Sign Up"
                        value="1"
                        className="grow font-zilla text-2xl"
                    />
                    <Tab label="Login" value="2" className="grow" />
                </TabList>
                <TabPanel value="1">
                    <Signup />
                </TabPanel>
                <TabPanel value="2">
                    <SignIn />
                </TabPanel>
            </TabContext>
        </>
    );
};

export default Login;
