import { Component } from 'react';
import '../styles/enemies.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class Enemy extends Component {
    constructor(props) {
        //destination starts at spawn
        super(props);
        this.path = props.enemyData.path;
        this.tickRate = props.enemyData.tickRate;
        this.enemyID = props.enemyID;
        // Enemy invokes this function to tell App gameloop player took damage
        this.damageTaken = props.enemyData.damageTaken;
        this.despawnEnemy = props.enemyData.despawnEnemy;

        this.state = {
            index : 0, // which path node I'm on
            destPos : [1, 0], // in coord space
            styles : {top : 73, left : 0}, // position in screen space
            render : true
        };
    }

    componentDidMount() {

        this.timerID = setInterval(() => this.tick(), this.tickRate);

        this.move();
        // let destination = this.calculateDestination(this.state.spawn);
        // console.log('destination:', destination);

        // this.setState({
        //     styles: {
        //         // ensures we're centering each enemy object
        //         // hard code the width of the cell object
        //         top: destination.top,
        //         left: destination.left
        //     }
        // })
    }

    // move to the destination position in state
    move() {

        // If enemy has reached the end
        if(this.state.index >= this.path.length) {
            this.damageTaken(this.enemyID);
            this.despawnEnemy(this.enemyID);
            this.setState({render : false}); // Remove from DOM
            clearInterval(this.timerID);
            return;
        }

        // Calculate the destination based on which index we're on, and post increment for next invocation
        let destination = this.calculateDestination(this.path[this.state.index++]);

        //@@ use to center object!
        const {width, height} = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.setState({
            styles: {
                // ensures we're centering each enemy object
                // hard code the width of the cell object
                top: destination.top,
                left: destination.left
            }
        })
    }

    // Given the tiles to travel to in (x, y) coord space
    // Calculate the (x, y) in screen space to set this element to
    calculateDestination(childID) {
        // Get the container
        let parentPos = document.getElementById('board').getBoundingClientRect();
        // Get the tile
        let childPos = document.getElementById(childID).getBoundingClientRect();
        // Calculate the tile's position relative to the parent
        let relativePos = {};
        relativePos.top = childPos.top - parentPos.top,
        relativePos.right = childPos.right - parentPos.right,
        relativePos.bottom = childPos.bottom - parentPos.bottom,
        relativePos.left = childPos.left - parentPos.left;
        return relativePos;
    }

    componentWillUnmount() {
        console.log('....Goodbye', this.enemyID);
        clearInterval(this.timerID);
    }

    tick() {
        // get current position
        // let currTileDest = this.computerElementCenterByID(this.path[0]);
        // Move along path
        this.move();
    }
    // Render this enemy component
    render() {
        const { render } = this.state;
        if(render === false) {
            console.log('NO RENDER!');
            return null;
        }
        return <div id={'enemy' + this.enemyID} class='squares' style={this.state.styles}></div>;
    }
}

export default Enemy;