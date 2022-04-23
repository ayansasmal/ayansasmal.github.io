import React from 'react';
import profile from "../../assets/images/FB_IMG_1572578256965.jpg";
import Classes from "./Intro.module.css"
import {Box, Tooltip} from "@mui/material";
import {EmailTwoTone, PrintTwoTone} from "@mui/icons-material";

const Intro = () => {
    return <Box className={Classes.Intro}>
        <div className={Classes.IntroImage}>
            <img src={profile} alt={"Profile"} className={Classes.Profile}/>
        </div>
        <div className={Classes.ShareIcons}>
            <Tooltip title={"Print Resume"} arrow>
                <PrintTwoTone fontSize={"large"} className={Classes.PrintIcon}/>
            </Tooltip>
            <Tooltip title={"Email Resume"} arrow>
                <EmailTwoTone fontSize={"large"}/>
            </Tooltip>
        </div>
        <div className={Classes.Name}>
            <div>Ayan</div>
            <div>Sasmal</div>
        </div>
        <div className={Classes.Contact}>
            <div>+61 452 299 076</div>
            <div>ayan.m.sasmal@gmail.com</div>
            <div>LinkedIn</div>
            <div>Github</div>
        </div>
    </Box>
}

export default Intro;