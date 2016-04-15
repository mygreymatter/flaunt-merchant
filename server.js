var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5001;
/*configDB = require('./config/db'),
    passport = require('passport'),
    flash = require('connect-flash'),
    busboyBodyParser = require('busboy-body-parser'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

require('./config/passport')(passport);


mongoose.connect(configDB.url);*/

app.set('port', PORT);
app.use(express.static(__dirname + '/public'));
/*app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(cookieParser());
app.use(session({
    secret: 'ILOVESCOTCH',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(busboyBodyParser());

require('./routes/authrouter.js')(app);
app.get('/store/*', function (req, res) {
    res.sendFile(__dirname + '/public/merchant/views/merchant.html');
});*/
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/index.html');
    /*res.sendFile(__dirname + '/public/views/test.html');*/
});

app.listen(app.get('port'), function () {
    console.log('Server running at http://127.0.0.1:' + PORT);
});
