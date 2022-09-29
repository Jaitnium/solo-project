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
        this.enemyTypes = props.enemyTypes;
        this.enemyData = props.enemyData;
        this.enemyID = 0;
        this.enemyData.despawnEnemy = this.despawnEnemy.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.spawnEnemy(), this.enemyData.spawnRate);
    }

    // This will be invoked when the player kills the enemy
    // Or the enemy reaches the end
    despawnEnemy(...enemyToKill) {
        // this.enemies.pop();
        console.log('toKill:', enemyToKill, typeof(enemyToKill));
       // ReactDOM.unmountComponentAtNode(document.getElementById('enemy' + enemyToKill));
        //Remove from enemies array
        console.log('totalEnemies:', this.state.enemies.length, this.state.enemies);

        // Filter out enemy to kill
        let resultArray = this.state.enemies.filter((enemy) => {
            return !enemyToKill.includes(enemy.props.enemyID);
        });
        this.setState({enemies : resultArray});
    }

    handleUserInput(userInput) {
        //console.log('handleUserInput:', userInput);
        //console.log('enemyTypes:', this.enemyTypes);
        // For every enemy type

        // Will be set if the userInput is valid css
        let userEnemyType = null;
        Object.entries(this.enemyTypes).forEach((et) => {
            console.log('enemyType:', et[0]);
            let enemyRegex = new RegExp(et[1].passing_condition[0], 'gm');

            if(userInput.match(enemyRegex)) {
                userEnemyType = et[0];
            }
        })
        console.log('Users enemyType:', userEnemyType);

        // If the user game a valid input type, destroy all corresponding enemies
        if(userEnemyType != null) {
            // Keeps track of all IDs to despawn
            let toDespawn = [];
            // Loop through each enemy to find a match
            for(let i = 0; i < this.state.enemies.length; i++) {
                let enemyType = this.state.enemies[i].props.enemyType[0];
                console.log('enemyType:', enemyType, typeof(enemyType));
                if(enemyType === userEnemyType) {
                    console.log('MATCH!', this.state.enemies[i].props.enemyID);
                    toDespawn.push(this.state.enemies[i].props.enemyID);
                }
            }
            console.log('toDespawn:', toDespawn);
            this.despawnEnemy(...toDespawn);
        }
    }

    // Listen for userInput change
    componentWillReceiveProps(nextProps) {
        console.log('inputSrc:', nextProps.userInput);
        if(nextProps.userInput) {
            this.handleUserInput(nextProps.userInput);
        }
    }
    // Given the current enemies list
    // Returns an enemy for current level if cooldown is up
    spawnEnemy() {
        console.log('totalEnemies:', this.state.enemies.length);

        // Get a random enemy type
        let enemyTypes = Object.entries(this.enemyTypes);
        let enemyType = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];

        //this.enemies.push(<Enemy tickRate={this.tickRate} path={this.path} spawn={this.path[0]} damageTaken={this.damageTaken}/>);
        //this.state.enemies.push(<Enemy enemyID = {++this.enemyID} enemyData={this.enemyData} enemyType={enemyType}/>);

        this.setState({enemies : this.state.enemies.concat([<Enemy key={this.enemyID} enemyID = {++this.enemyID} enemyData={this.enemyData} enemyType={enemyType}/>])});

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