/**
 * Created by mayo on 1/27/16.
 */

var localStrategy = require('passport-local').Strategy;
var Merchant = require('../models/Merchant');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        Merchant.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        console.log('Local Signup called');
        process.nextTick(function () {
            Merchant.findOne({
                'username': username
            }, function (err, user) {
                if (err)
                    return done(err);

                if (user)
                    return done(null, false, req.flash('signup_message', 'The username has already been taken!'));
                else {
                    var newUser = new Merchant();
                    newUser.username = username;
                    //newUser.password = newUser.se(password);
                    newUser.setPassword(password);

                    newUser.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
};
