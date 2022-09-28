import React, { Component } from 'react';
import '../styles/main.scss'
import Board from './Board.jsx';
import EnemySpawner from '../enemy_spawner';

class App extends Component {
  constructor(props) {
    super(props);
    this.tickRate = 1000;
    // Initial board state here
    this.state = {
      level : 1,
      enemySpawner : new EnemySpawner(this.tickRate)
    };
  }

  componentDidMount() {
    this.gameLoop();
    this.timerID = setInterval(() => this.gameLoop(), this.tickRate);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  gameLoop() {
    // Spawn an enemy, update enemies array, setState lets children know of prop value change
    this.setState({
      enemies: this.state.enemySpawner.spawnEnemy()
    });
    // Spawn any available enemies
    //enemies.spawnEnemy();
  }

  render() {
    let path = [[1, 0], [1, 1], [1, 2], [2,2], [3, 2], [3, 3], [3, 4], [3, 5], [2, 5], [1, 5], [1, 6], [1, 7],
    [2, 7], [3, 7], [4, 7], [5, 7], [5, 6], [5, 5], [5,4], [5, 3], [6, 3], [7, 3], [7, 4], [7, 5], [7, 6],
  [7, 7], [7, 8], [7, 9], [6, 9], [6, 10], [5, 10], [4, 10], [3, 10], [2, 10], [2, 11], [2, 12], [2, 13],
[3, 13], [4, 13], [4, 12], [5, 12], [6, 12], [7, 12], [7, 13], [8, 13], [8, 14]];
    return (
      <Board totalRows = {10} totalColumns = {15} path = {path} enemies = {this.state.enemies}/>
    );
  }
}

export default App;