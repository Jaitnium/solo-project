import React, { Component } from 'react';
import '../styles/main.scss'
import Board from './Board.jsx';
//import {instance as enemySpawner} from './Enemies.jsx';
import Enemies from './enemy_spawner.jsx';
import ReactDOM from 'react-dom';
import Input from './Input.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.path = [[1, 0], [1, 1], [1, 2], [2, 2], [3, 2], [3, 3], [3, 4], [2, 4], [1, 4], 
    [1, 5], [1, 6], [2, 6], [2, 7], [3, 7], [3, 8], [4, 8], [5, 8], [6, 8], [6, 7],
    [6, 6], [5, 6], [5, 5], [5, 4], [5, 3], [6, 3], [6, 2], [7, 2], [8, 2], [8, 3], 
    [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [9, 8]];

    // API call to get enemyData from database model
       //Pass enemy types to enemy_spawner
       //Pass to Input to confirm passing_conditions
    let enemyJSON = JSON.parse(fetchDummy())
    this.enemyTypes = enemyJSON;

    // Initial board state here
    this.state = {
      level : 1,
      userInput : '',
      enemyData : {
        tickRate : 1000, // How fast enemies move
        spawnRate : 3000, // How rapidly enemies spawn
        path : this.path, 
        damageTaken : this.damageTaken.bind(this),
      },
    };
  }

  componentDidMount() {
    // this.gameLoop();
    // this.timerID = setInterval(() => this.gameLoop(), this.state.enemyData.spawnRate);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  damageTaken(enemyID) {
    console.log('OUCH THAT HURT!');
    // let toRemove = document.getElementById('enemy' + enemyID);
    // unmountComponentAtNode(toRemove);
    // toRemove.remove();

    // this.setState({
    //   enemies: this.state.enemySpawner.despawnEnemy(enemyID)
    // });
  }

  userInputCB(input) {
    console.log('user input!');
    this.setState({userInput : input});
  }

  render() {
    return (
      <div>
        <div id="container">
          <Board totalRows={10} totalColumns={10} path={this.path} />
          <Enemies enemyData={this.state.enemyData} enemyTypes={this.enemyTypes} userInput={this.state.userInput}/>
        </div>
        <Input userInputCB={this.userInputCB.bind(this)}/>

      </div>
    );
  }
}

function fetchDummy() {
  
  return JSON.stringify(
    {
      "circle": {
        "text": "I want to be round!",
        "passing_condition": ["\\s*border-radius:\\s*[5-9][0-9]%\\s*;?"]
      },
      "bc-red": {
        "text": "Make me red!",
        "passing_condition": ["\\s*background-color:\\s*red;?"] 
      },
      "bc-purple": {
        "text": "Make me purple!",
        "passing_condition": ["\\s*background-color:\\s*purple;?"] 
      },
      "bc-yellow": {
        "text": "Make me Yellow!",
        "passing_condition": ["\\s*background-color:\\s*yellow;?"] 
      },
      "opacity": {
        "text": "I'm rather shy",
        "passing_condition": ["\\s*opacity:\\s*[0,1].?[0-9]?;?"] 
      }
    }
  )
}

export default App;