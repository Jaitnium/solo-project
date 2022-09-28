import React, { Component } from 'react';
import Cell from './Cell.jsx';
import '../styles/main.scss';

const Row = (props) => {

    // If the given cell is a path cell
    function cellInPath(cell) {
        for(let i = 0; i < props.path.length; i++) {
            if(cell[0] === props.path[i][0] && cell[1] === props.path[i][1]) {
                return true;
            }
        }
        return false;
    }

    const cells = [];
    // console.log('totalColumns:', props.totalColumns);
    // console.log('props.path:', props.path);

    for(let i = 0; i < props.totalColumns; i++) {
        // Check if in path
        cells.push(< Cell cellID={[props.rowID, i]} isPath={cellInPath([props.rowID, i])} />);
    }

    return (
        <div id="row">{cells}</div>
    )
}

export default Row;