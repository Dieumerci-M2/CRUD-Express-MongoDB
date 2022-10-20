// Imports
const express = require('express')
const  mongoose = require('mongoose');
const session = require("express-session")

const app = express();
const PORT = 7001
// Middlewires
app
    .use(express.urlencoded({extended: false}))
    .use(express.json())
    .use(session({
        secret: 'my secret key',
        saveUninitialized: true,
        resave: false,
    }))
    .use((req, res, next)=>{
        res.locals.message = req.session.message;
        delete req.session.message;
        next();
    })
//Set up default mongoose connection

mongoose.connect('mongodb://localhost/crud_app', { useNewUrlParser: true });

 //Get the default connection 

const db = mongoose.connection;

//Bind connection to error event (to get no  tification of connection errors)

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=> console.log('Connected to the server'))

// show home page

app.get('/', (req, res)=>{
    res.send("Hello Express-Mongo");
    console.log('hello');
})

// Port listening

app.listen(PORT, ()=> console.log( `Notre app est lancée sur : http://localhost:${PORT}`)) 
