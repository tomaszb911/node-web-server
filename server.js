const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');


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
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
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

app.get('/map', (req, res) => {
    res.render('map.hbs', {
        coordinate: [
            {coords: '42.510340, 1.5367663', label: 'A'},
            {coords: '42.510059, 1.5355217', label: 'B'},
            {coords: '42.510035, 1.5330917', label: 'C'},
            {coords: '42.509652, 1.5342450', label: 'D'},
            {coords: '42.509759, 1.5381289', label: 'E'},
            {coords: '42.510538, 1.5371364', label: 'F'}
            ],
        coordinate2: '42.520340, 1.5467663'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
