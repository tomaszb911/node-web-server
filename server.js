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
            {coords: '42.510538, 1.5371364', label: 'F'},
            {coords: '42.510059, 1.5355217', label: 'B2'}
            ],
            coordinate2:[
                {coords: '51.51526, 5.3986',label:'Dominos Pizza 65 Best Best Noord-Brabant 5683 5683KB NL'},
            {coords: '52.11531, 5.03388',label:'New York Pizza 80E Utrecht Utrecht Utrecht 3543 3543AD NL'},
            {coords: '51.65698, 5.29899',label:'Dominos Pizza 2A Vught Vught Noord-Brabant 5261 5261EP NL'},
            {coords: '51.65669, 5.29836',label:'Pizzeria Grillroom La Strada 2-B Vught Vught North Brabant 5261 5261EP NL'},
            {coords: '52.29675, 4.85427',label:'Dominos Pizza 4 Amstelveen Amstelveen Noord-Holland 1185 1185HH NL'},
            {coords: '51.73054, 5.32568',label:'Dominos Pizza 42 Empel, s-Hertogenbosch s-Hertogenbosch Noord-Brabant 5236 5236AB NL'},
            {coords: '52.30518, 4.86984',label:'New York Pizza 10 Amstelveen Amstelveen Noord-Holland 1181 1181WD NL'},
            {coords: '52.03604, 5.07166',label:'Grandi 14 Nieuwegein Nieuwegein Utrecht 3436 3436GS NL'},
            {coords: '52.52029, 4.7069',label:'Ristorante Pizzeria Le Mimose 1 Uitgeest Uitgeest North Holland 1911 1911EZ NL'},
            {coords: '52.52519, 4.70943',label:'shoarma Grillroom Pizzeria De Piramide Piramide Shoarma Grillroom Pizzeria De 1 Uitgeest Uitgeest North Holland 1911 1911HP NL'},
            {coords: '52.61959, 4.74724',label:'Dominos Pizza 61 Alkmaar Alkmaar North Holland 1813 1813BA NL'},
            {coords: '52.33804, 4.77882',label:'New York Pizza 130 Badhoevedorp Haarlemmermeer Noord-Holland 1171 1171CL NL'},
            {coords: '52.29221, 4.85503',label:'New York Pizza 178 Amstelveen Amstelveen Noord-Holland 1185 1185GH NL'},
            {coords: '51.99477, 5.09196',label:'Pizzeria De Middellandse Zee 35 Vianen Vijfheerenlanden Utrecht 4132 4132AN NL'},
            {coords: '52.04117, 5.0756',label:'New York Pizza 1A Nieuwegein Nieuwegein Utrecht 3437 3437AR NL'},
            {coords: '52.0138, 5.05604',label:'New York Pizza 23 IJsselstein IJsselstein Utrecht 3401 3401MC NL'},
            {coords: '52.1352, 5.03018',label:'Dominos Pizza 1190 Maarssen Stichtse Vecht Utrecht 3605 3605KG NL'},
            {coords: '52.13565, 5.03173',label:'New York Pizza 321 Maarssen Stichtse Vecht Utrecht 3605 3605MD NL'},
            {coords: '51.71294, 5.31371',label:'New York Pizza 5A s-Hertogenbosch s-Hertogenbosch Noord-Brabant 5233 5233RG NL'},
            {coords: '52.17223, 5.00441',label:'Pizzeria Il Pino 11 Breukelen Stichtse Vecht Utrecht 3621 3621AG NL'},
            {coords: '51.70836, 5.36397',label:'Dominos Pizza 7 Rosmalen s-Hertogenbosch Noord-Brabant 5242 5242HT NL'},
            {coords: '51.50983, 5.384',label:'New York Pizza 43 Best Best Noord-Brabant 5684 5684NE NL'},
            {coords: '52.62997, 4.74908',label:'Eethuis Ali Baba 22 Alkmaar Alkmaar North Holland 1811 1811BJ NL'},
            {coords: '52.62854, 4.75265',label:'Capones Pizza & Pasta 2 Alkmaar Alkmaar Noord-Holland 1811 1811EA NL'},
            {coords: '52.62854, 4.75265',label:'New York Pizza 2 Alkmaar Alkmaar North Holland 1811 1811EA NL'},
            {coords: '52.62763, 4.75496',label:'Pizza Taxi Pulcinella 1 Alkmaar Alkmaar Noord-Holland 1813 1813SC NL'},
            {coords: '52.00476, 5.09623',label:'Restaurante Pizzeria Vreeswijk Pizzeria Vreeswijk 7 Nieuwegein Nieuwegein Utrecht 3433 3433ZC NL'},
            {coords: '51.58749, 5.32153',label:'Bakkal 40 Boxtel Boxtel North Brabant 5281 5281GB NL'},
            {coords: '52.63144, 4.74971',label:'Thups Pizzabakkerij & Delicatessen 38 Alkmaar Alkmaar North Holland 1811 1811JM NL'},
            {coords: '52.02904, 5.08459',label:'Dominos Pizza 192 Nieuwegein Nieuwegein Utrecht 3431 3431KC NL'},
            {coords: '52.07509, 5.09517',label:'New York Pizza 8 Utrecht Utrecht Utrecht 3527 3527GA NL'},
            {coords: '51.68846, 5.31092',label:'New York Pizza 145 s-Hertogenbosch s-Hertogenbosch Noord-Brabant 5211 5211MK NL'},
            {coords: '52.63325, 4.74234',label:'La Famiglia 5 Alkmaar Alkmaar North Holland 1811 1811KB NL'},
            {coords: '52.60006, 4.70389',label:'New York Pizza 73 Heiloo Heiloo Noord-Holland 1851 1851LL NL'},
            {coords: '51.68747, 5.30727',label:'Pizzeria Trattoria Da Silva 6 s-Hertogenbosch s-Hertogenbosch North Brabant 5211 5211KL NL'},
            {coords: '51.69482, 5.32286',label:'Pizzeria Da Lino 145 s-Hertogenbosch s-Hertogenbosch North Brabant 5213 5213AD NL'},
            {coords: '51.68695, 5.30534',label:'Pizzabar Deeg 46 s-Hertogenbosch s-Hertogenbosch Noord-Brabant 5211 5211HX NL'},
            {coords: '51.58523, 5.31867',label:'Dominos Pizza 16 Boxtel Boxtel Noord-Brabant 5281 5281GH NL'},
            {coords: '52.09244, 5.09679',label:'Pizza Valentino 82A Utrecht Utrecht Utrecht 3531 3531ER NL'},
            {coords: '52.48588, 4.66044',label:'New York Pizza 54 Beverwijk Beverwijk Noord-Holland 1941 1941DN NL'}

            ],
            coordinate3:[
                {coords: '52.39066, 4.8787',label:'Pinsas 772 Amsterdam Amsterdam North Holland 1013 1013TA NL'},
                {coords: '52.37509, 4.89152',label:'Pizzeria Il Centro 134 Amsterdam Amsterdam North Holland 1012 1012SH NL'},
                {coords: '52.37206, 4.8948',label:'New York Pizza Damstraat New York Pizza 24 Oudezijde, Amsterdam Amsterdam Noord-Holland 1012 1012JL NL'},
                {coords: '52.37224, 4.89487',label:'Pizzeria Lunchroom Amsterdam 9 Amsterdam Amsterdam North Holland 1012 1012JL NL'},
                {coords: '52.3812, 4.89022',label:'Restaurant-Pizzeria Lucca Due 130 Amsterdam Amsterdam North Holland 1013 1013EM NL'},
                {coords: '52.37535, 4.8956',label:'New York Pizza New York Pizza Amsterdam Damrak 51 Nieuwezijde, Amsterdam Amsterdam Noord-Holland 1012 1012LL NL'},
                {coords: '52.3691, 4.89166',label:'New York Pizza Restaurant Amsterdam Spui New York Pizza 2 Nieuwezijde, Amsterdam Amsterdam Noord-Holland 1012 1012WX NL'},
                {coords: '52.38086, 4.82081',label:'Osdorp Pizzeria 127 Amsterdam Amsterdam North Holland 1063 1063JN NL'},
                {coords: '52.37118, 4.89758',label:'san Cirillo Restaurant San Cirillo 20 Amsterdam Amsterdam North Holland 1012 1012CD NL'},
                {coords: '52.37519, 4.89815',label:'New York Pizza 4 Oudezijde, De Wallen, Amsterdam Amsterdam Noord-Holland 1012 1012GT NL'},
                {coords: '52.37495, 4.89865',label:'Da Portare Via Amsterdam De Wallen 16 Amsterdam Amsterdam North Holland 1012 1012GS NL'},
                {coords: '52.37489, 4.89878',label:'Dominos Pizza 20 Oudezijde, De Wallen, Amsterdam Amsterdam Noord-Holland 1012 1012GS NL'},
                {coords: '52.37541, 4.88637',label:'Da Portare Via Amsterdam Leliegracht 34 Amsterdam Amsterdam North Holland 1015 1015DE NL'},
                {coords: '52.36646, 4.89569',label:'New York Pizza Amsterdam Reguliersbreestraat New York Pizza 51 Amsterdam, Amstelbuurt Amsterdam Noord-Holland 1017 1017CM NL'},
                {coords: '52.37461, 4.89984',label:'san Thomas Pizza King 4i Oudezijde, De Wallen, Amsterdam Amsterdam Noord-Holland 1012 1012EA NL'},
                {coords: '52.38423, 4.87556',label:'New York Pizza 67 Amsterdam Amsterdam North Holland 1051 1051BA NL'},
                {coords: '52.37742, 4.81248',label:'New York Pizza 67-69 Amsterdam Amsterdam North Holland 1064 1064KL NL'},
                {coords: '52.37833, 4.90041',label:'New York Pizza New York Pizza Amsterdam Centraal 13 Amsterdam Amsterdam North Holland 1012 1012 AB NL'},
                {coords: '52.38324, 4.87779',label:'Giordano 91 Amsterdam Amsterdam North Holland 1052 1052AE NL'},
                {coords: '52.36848, 4.9007',label:'Pizza Statione Waterlooplein 6 Amsterdam Amsterdam North Holland 1011 1011MS NL'},
                {coords: '52.3788, 4.85172',label:'Dominos Pizza 215 Amsterdam Amsterdam North Holland 1055 1055DT NL'},
                {coords: '52.37252, 4.90176',label:'Il Sogno - The Italian Conceptstore 19 Amsterdam Amsterdam North Holland 1011 1011ES NL'},
                {coords: '52.36314, 4.89236',label:'La Buona Forchetta 103H Amsterdam Amsterdam North Holland 1017 1017HG NL'},
                {coords: '52.37534, 4.84832',label:'Eetwinkel Buurman En Buurman 171 Amsterdam Amsterdam North Holland 1056 1056RC NL'},
                {coords: '52.37395, 4.88188',label:'Collina Ristorante 24 Amsterdam Amsterdam North Holland 1016 1016LP NL'},
                {coords: '52.36404, 4.88446',label:'Pizza Pino 104/106 Amsterdam, Amstelbuurt Amsterdam Noord-Holland 1017 1017NM NL'},
                {coords: '52.36459, 4.88335',label:'New York Pizza 104 Amsterdam Amsterdam North Holland 1017 1017NZ NL'},
                {coords: '52.36163, 4.89938',label:'Il Boccalino 133 Amsterdam Amsterdam North Holland 1017 1017VL NL'},
                {coords: '52.36099, 4.89892',label:'Pistache Amsterdam 8hs Amsterdam Amsterdam North Holland 1017 1017XM NL'},
                {coords: '52.37288, 4.87802',label:'Dominos Pizza 166 Amsterdam Amsterdam North Holland 1016 1016LR NL'},
                {coords: '52.3729, 4.87786',label:'Pizzeria Venedik 164 Amsterdam Amsterdam North Holland 1016 1016LR NL'},
                {coords: '52.37608, 4.87334',label:'Yamyam Trattoria Pizzeria Yam Yam 90 Amsterdam Amsterdam North Holland 1052 1052HZ NL'},
                {coords: '52.35693, 4.8963',label:'Donna Pizza 140 De Pijp, Amsterdam Amsterdam Noord-Holland 1073 1073XN NL'},
                {coords: '52.35572, 4.89284',label:'New York Pizza 54A Amsterdam Amsterdam North Holland 1072 1072NX NL'},
                {coords: '52.35625, 4.89735',label:'De Pizzabakkers 16 Amsterdam Amsterdam North Holland 1073 1073CK NL'},
                {coords: '52.36985, 4.85159',label:'Ice & Bites 24 Amsterdam Amsterdam North Holland 1057 1057CB NL'},
                {coords: '52.35593, 4.88867',label:'Da Portare Via Amsterdam De Pijp 63 Amsterdam Amsterdam North Holland 1072 1072BM NL'},
                {coords: '52.36484, 4.87729',label:'El Amor 26 hs Amsterdam Amsterdam North Holland 1054 1054CJ NL'},
                {coords: '52.35477, 4.8891',label:'Pizzeria Via Via 56H Amsterdam Amsterdam North Holland 1072 1072CV NL'},
                {coords: '52.36534, 4.87576',label:'Pizza Amsterdam 43h Amsterdam Amsterdam North Holland 1054 1054AN NL'},

            ]
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
