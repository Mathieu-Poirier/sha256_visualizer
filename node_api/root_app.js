const express = require('express');
const app = express();
const PORT = 4100;

app.get('/getData', (req, res) => {
    res.json({
        statusCode:200,
        "statusMessage":"Sucess"
    })
})

app.listen(PORT, (req, res) =>{
    console.log("Express API is running on port " + PORT);
})