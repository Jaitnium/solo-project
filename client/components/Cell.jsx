import React, { Component } from 'react';
import '../styles/main.scss';

const Cell = (props) => {
    //let cell = props.isPath? <div id="ground"></div> : <div id="ground"></div> ;
    let cell = [];
    //console.log('cell:', props.cellID, 'isPath?', props.isPath);
    if(props.isPath) {
        cell.push(<div id="path"></div>)
    }
    else {
        cell.push(<div id="ground"></div>);
    }
    //<div id="ground"></div>
    //<div id="ground"></div>
    return (
        cell
    )
}

export default Cell;