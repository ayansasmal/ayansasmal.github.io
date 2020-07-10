import React from 'react';
import Classes from './ProjectExperience.module.css';

const ProjectExperience = props => {
    return <div className={Classes.ProjectExperience}>
        <div>{props.title}</div>
        <div>{props.designation}</div>
        <div>{props.duration}</div>
        <div>{props.description}</div>
        <div>{props.listedData}</div>
    </div>
}

export default ProjectExperience;