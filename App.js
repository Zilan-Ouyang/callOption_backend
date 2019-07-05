const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const database = require('./index')
app.use(bodyParser.json());

app.get('/price', (req, res)=>{

});

app.post('/addAsset',(req, res)=> {

})






app.listen(port, () => console.log(`Server listening on port ${port}!`))