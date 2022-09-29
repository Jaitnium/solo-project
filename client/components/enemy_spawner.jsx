import Enemy from './Enemy.jsx';
import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App.jsx';
import ReactDOM from 'react-dom';

class Enemies extends Component {
    // Load enemies here
    constructor(props) {
        super(props);
        console.log('enemies_props:', props);
        this.state = {
            enemies : []
        }
        // this.damageTaken = damageTaken;
        this.enemyData = props.enemyData;
        this.enemyID = 0;
        this.enemyData.despawnEnemy = this.despawnEnemy.bind(this);
        this.enemies = [];
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.spawnEnemy(), this.enemyData.spawnRate);
    }

    // This will be invoked when the player kills the enemy
    // Or the enemy reaches the end
    despawnEnemy(enemyToKill) {
        // this.enemies.pop();
        console.log('hello???', document.getElementById('enemy' + enemyToKill));
        ReactDOM.unmountComponentAtNode(document.getElementById('enemy' + enemyToKill));

        // console.log('Before removal:', this.state.enemies);
        // for(let i = 0; i < this.state.enemies.length; i++) {
        //     if(this.state.enemies[i].props.enemyID === enemyToKill) {
        //         console.log('KILL!:', this.state.enemies[i].props.enemyID, enemyToKill);
        //         let firstHalf = this.state.enemies.slice(0, i);
        //         let secondHalf = this.state.enemies.slice(i + 1);
        //         this.state.enemies = firstHalf.concat(secondHalf);
        //         //this.setState({enemies : [...firstHalf, ...secondHalf]});
        //     }
        // }
        // console.log('After removal:', this.state.enemies);

        
        //return this.enemies;
    }

    // Given the current enemies list
    // Returns an enemy for current level if cooldown is up
    spawnEnemy() {
        console.log('totalEnemies:', this.state.enemies.length);
        //this.enemies.push(<Enemy tickRate={this.tickRate} path={this.path} spawn={this.path[0]} damageTaken={this.damageTaken}/>);
        this.state.enemies.push(<Enemy enemyID = {++this.enemyID} enemyData={this.enemyData}/>);


        this.setState({enemies : this.state.enemies});


        return this.enemies;
    }

    render() {
        return (
            <div id="enemies">
                {this.state.enemies}
            </div>
        );
    }
}

export default Enemies;