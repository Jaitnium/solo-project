import './styles/main.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';


// App component
//const app = (< App />).type.bind(App.addEnemy)
const app = (< App />)
// Create the board
// Create the path for the enemies to travel across
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);