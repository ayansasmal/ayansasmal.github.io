import React, {SyntheticEvent, useState} from 'react';
import Classes from './App.module.css';
import {Container, Stack} from "@mui/material";
import Intro from "./components/Intro/Intro";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";

function App() {
    const [selectedTab, setSelectedTab] = useState('aboutMe');
    const handleNavChange = (_event: SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    }
    return (
        <Container maxWidth={"xl"} className={Classes.App}>
            <Stack>
                <Intro/>
                <Navigation selectedTab={selectedTab} onNavChange={handleNavChange}/>
                <Content>
                    {selectedTab === "aboutMe" && <AboutMe/>}
                    {selectedTab === "skills" && <Skills/>}
                    {selectedTab === "experiences" && <Experiences/>}
                </Content>
            </Stack>
        </Container>
    );
}

export default App;
