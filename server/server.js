const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const bodyParser = require('body-parser');


var { mongoose } = require('./db/mongoose');
var { Poi } = require('./models/poi');
var { Polyline } = require('./models/polyline');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

app.use(bodyParser.json());

app.use((req, res, next) => {
    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to appedn to server.log');
        }
    });
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    var date = new Date().getFullYear();
    return date;
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

hbs.registerHelper('dejPoj', ()=>{
    Poi.find().then((pois)=>{
        console.log('pois: ',{pois});
       return {pois};
    }, (e)=>{
        console.log('Sth is no yes',e);
    });
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome on my new dynamic website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'uups, something went wrong :('
    })
});

app.post('/poi', (req, res) => {
    var poi = new Poi({
        coords: req.body.coords,
        label: req.body.label
    });
    console.log(req.body.coords)
    poi.save().then((doc) => {
        res.send(doc);
    
    }
    ,(err) => {
        res.status(400).send(err);
    })
});

app.get('/pois', (req,res)=>{
    Poi.find().then((pois)=>{
        res.send({pois});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/map', (req, res) => {
    res.render('map.hbs', {
        coordinate: [
           
            ],
            coordinate3:[

            ]
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
