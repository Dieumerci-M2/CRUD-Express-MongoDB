// Imports
require('dotenv').config();
const express = require('express')
const  mongoose = require('mongoose');
const session = require("express-session")

const app = express();
const PORT = process.env.PORT || 7000

//Set up default mongoose connection

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

 //Get the default connection 

const db = mongoose.connection;

//Bind connection to error event (to get no  tification of connection errors)

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=> console.log('Connected to the server'))

// show home page

app.get('/', (req, res)=>{
    res.send("Hello Express-Mongo");
})

// Port listening

app.listen(PORT, ()=> console.log( `Notre app est lancée sur : http://localhost:${PORT}`)) 
