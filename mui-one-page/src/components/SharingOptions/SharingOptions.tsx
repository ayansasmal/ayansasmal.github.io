import React from 'react';
import {Stack} from "@mui/material";
import Classes from "./SharingOptions.module.css";
import {EmailTwoTone, PrintTwoTone} from "@mui/icons-material";

const SharingOptions = () => {
    return <Stack direction={"row"} className={Classes.Options}>
        <div className={Classes.Label}><PrintTwoTone fontSize={"large"}/></div>
        <div className={Classes.Label}><EmailTwoTone fontSize={"large"}/></div>
    </Stack>
}

export default SharingOptions;