const express = require('express')
const app = express()

// Serve the static files from the React app
app.use(express.static(__dirname+'/build'));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(__dirname+'/build');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);