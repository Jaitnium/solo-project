import Enemy from './components/Enemy.jsx';
import React from 'react';
import App from './components/App.jsx';

class EnemySpawner {
    // Load enemies here
    constructor(tickRate, path) {
        console.log('EnemySpawner:', tickRate);
        this.tickRate = tickRate;
        this.path = path;
        this.enemies = [];
    }
    // Invoked by main game loop
    // Given the current enemies list
    // Returns an enemy for current level if cooldown is up
    spawnEnemy() {
        console.log('spawning Enemy!');
        this.enemies.push(<Enemy tickRate={this.tickRate} path={this.path} spawn={this.path[0]}/>);
        return this.enemies;
    }
}

export default EnemySpawner;