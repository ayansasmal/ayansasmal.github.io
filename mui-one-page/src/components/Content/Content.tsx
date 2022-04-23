import React from 'react';
import Classes from './Content.module.css';

const Content = (props:any) => {
    return <div className={Classes.Content}>{props.children}</div>
}

export default Content;