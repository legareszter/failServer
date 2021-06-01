const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/colors', (req,res) =>{
	console.log('Sending colors response');
    res.json([
    	{id: 'red', hex: '#ff0000'},
    	{id: 'green', hex: '#00ff00'},
    	{id: 'blue', hex: '#0000ff'},
    	]);
});

app.get('*', (req,res) =>{
	console.log('Sending failed response');
    res.sendStatus(400);
});

const port = process.env.PORT || 3002;
app.listen(port);

console.log('App is listening on port ' + port);