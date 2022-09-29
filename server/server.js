const express = require('express');
const app = express();
const path = require('path');

console.log('IN SERVER!');

app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

// app.get('/enemyData.json', (req, res) => {
//     //return res.status(200).sendFile(path.join(__dirname, '../index.html'));
//     console.log('hello');
//     return res.status(200).sendFile(path.join(__dirname, '../enemyData.json'));
// });

app.get('/', (req, res) => {
    //return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    console.log('hello');
    return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

// console.log('BYE SERVER!')

// app.use('/', (req, res) => {
//     console.log('req:', req);
// });

app.listen(3000);