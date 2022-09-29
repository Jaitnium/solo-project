import React, { Component } from 'react';
import Row from './Row.jsx';
import '../styles/main.scss'

class Board extends Component  {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let rows = [];
        for (let i = 0; i < this.props.totalRows; i++) {
            rows.push(< Row rowID={i} totalColumns={this.props.totalColumns} path={this.props.path} />);
        }       

        return (
            <div id="board">
                {rows}
            </div>
        )
    }
}



export default Board;