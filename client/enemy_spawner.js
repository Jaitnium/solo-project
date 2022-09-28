import Enemy from './components/Enemy.jsx';
import React from 'react';
import App from './components/App.jsx';

class EnemySpawner {
    // Load enemies here
    constructor(tickRate) {
        console.log('EnemySpawner:', tickRate);
        this.tickRate = tickRate;
        this.enemies = [];
    }
    // Invoked by main game loop
    // Given the current enemies list
    // Returns an enemy for current level if cooldown is up
    spawnEnemy() {
        console.log('spawning Enemy!');
        this.enemies.push(<Enemy tickrate={this.tickRate}/>);
        return this.enemies;
    }
}

export default EnemySpawner;