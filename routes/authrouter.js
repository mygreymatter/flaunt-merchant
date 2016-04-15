module.exports = function (app, passport) {
    var User = require('../models/User');


    app.post('/login', function (req, res) {
        console.log('Call login: ' + req.body.username);

        User.findOne({
                'username': req.body.username
            },
            function (err, user) {
                if (err) {
                    console.log("Found Error: " + err);
                    return res.status(500).json();
                }

                if (user == null) {
                    console.log('User is null ');
                    return res.status(500).json();
                }

                console.log("Found User: " + user);
                if (user.validPassword(req.body.password))
                    return res.json({
                        status: 'successful login',
                        token: user.generateJWT()
                    });

                return res.status(500).json({
                    status: responses.INVALID_PASSWORD
                });
            });
    });

    app.post('/signup', function (req, res) {
        console.log("Signup Called: " + req.body.username);

        var user = new User();

        user.username = req.body.username;
        user.setPassword(req.body.password);

        user.save(function (err) {
            if (err) {
                console.log('Save Error: ' + err.code);
                if (err.code === 11000)
                    return res.status(500).json();
            }
            console.log('Saved: ' + user);
            return res.json();

        });

    });
};
