import { Component } from 'react';
import '../styles/enemies.scss';
import React from 'react';

class Enemy extends Component {
    constructor(props) {
        super(props);
        this.enemyDOM = <div id="enemy" class="squares"></div>;
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), this.props.tickRate);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // Move along path
        //console.log(getComputedStyle(this.enemyDOM));
        //console.log('enemy:', this.enemyDOM);
    }
    // Render this enemy component
    render() {
        return this.enemyDOM;
    }
}

export default Enemy;