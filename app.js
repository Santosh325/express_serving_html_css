const express = require('express')
const app = express();
const path = require('path')
const PORT = 5000;

console.log(__dirname,'/public')
const staticFile = path.join(__dirname,'/public')
app.use('/', express.static(staticFile))

app.get('/',(req,res) => {
    res.send('Welcome to Home Page')
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})