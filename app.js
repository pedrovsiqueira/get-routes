// app.js
const express = require('express')
const app     = express()
const path    = require('path') 
const hbs     = require('hbs') 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  console.log(req);
})

app.listen(3000, () => console.log('App listening on port 3000!'))

