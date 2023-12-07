import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Signup from "../components/SignUp";
import SignIn from "../components/SignIn";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, dispatch } = useAuthContext();
    const [tab, setTab] = useState("1");
    const navigate = useNavigate();

    const handleChange = (e, newValue) => {
        setTab(newValue);
    };

    return (
        <>
            {!user && (
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
            )}
        </>
    );
};

export default Login;
