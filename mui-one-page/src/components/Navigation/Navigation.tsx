import React from 'react';
import Proptypes, {InferProps} from 'prop-types';
import {Tab, Tabs} from "@mui/material";
import Classes from "./Navigation.module.css"

// @ts-ignore
const Navigation = ({onNavChange, selectedTab}: InferProps<typeof Navigation.propTypes>) => {
    return <div className={Classes.Navigation}>
        <Tabs value={selectedTab} onChange={onNavChange}>
            <Tab label="About Me" value={"aboutMe"}/>
            <Tab label="Skills" value={"skills"}/>
            <Tab label="Experiences" value={"experiences"} />
        </Tabs>
    </div>
}

Navigation.propTypes = {
    selectedTab: Proptypes.string.isRequired,
    onNavChange:Proptypes.func.isRequired
}
export default Navigation;