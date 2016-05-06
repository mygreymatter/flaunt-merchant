module.exports = function (app) {
    var Visitor = require('../models/Visitor');

    function getArrayFromString(s) {
        s = s.replace(/'/g, '"');
        return JSON.parse(s);
    }

    app.route('/visitor')
        .post(function (req, res) {
            console.log("Create Visitor: ");

            var visitor = new Visitor();
            visitor.product = req.body.product;
            visitor.merchant = req.body.merchant;
            visitor.store = req.body.store;
            visitor.user = req.body.user;
            visitor.visited_on = new Date();

            visitor.save(function (err) {
                if (err) {
                    console.log('Save Error: ' + err.code + ' ' + err.message);
                    if (err.code === 11000)
                        return res.status(500).json({
                            message: 'Visitor already exists'
                        });
                }
                console.log('Saved: ' + visitor);
                return res.json();

            });

        }).put(function (req, res) {
            console.log('Updating Visitor');

            //converts array in the form of string into an array
            //"["a","b"]"  ====> ["a","b"]
            req.body.business_type = getArrayFromString(req.body.business_type);
            console.log('Arr: ' + req.body.business_type);

            var visitor_type = [];
            req.body.business_type.forEach(function (value) {
                visitor_type.push(value);
            });
            console.log('Visitor Type: ' + visitor_type);

            Visitor.findByIdAndUpdate(req.body.id, {
                name: req.body.name,
                license: req.body.license,
                landmark: req.body.landmark,
                area: req.body.area,
                business_type: visitor_type,
                date_of_establishment: new Date(req.body.date_of_establishment)
            }, function (err, visitor) {
                if (err) {
                    console.log('Updating Visitor failed: ' + err);
                    return res.status(500).json({
                        status: 'Updating Visitor failed!'
                    });
                }
                console.log('Updated Visitor - success: ' + visitor);
                return res.json({
                    status: 'success',
                    id: req.body.id
                });
            });

        }).delete(function (req, res) {
            console.log('Deleting Visitor');

            Visitor.findByIdAndRemove(req.body.id, function (err) {
                if (err) {
                    console.log('Remove Visitor failed: ' + err);
                    return res.status(500).json({
                        status: 'Remove Visitor failed!'
                    });
                }
                return res.json({
                    status: 'success'
                });
            });

        });

    app.route('/getvisitors_ondate').get(function (req, res) {
        console.log('Getting visitor');
        if (req.query.date) {
            var currDate = new Date(req.query.date);
            var nexDate = new Date(req.query.date);
            nexDate.setDate(nexDate.getDate() + 1);

            Visitor.find({
                    'visited_on': {
                        '$gte': currDate,
                        '$lt': nexDate
                    }
                },
                function (err, visitor) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (visitor == null) {
                        console.log('Visitor is null ');
                        return res.status(500).json({
                            message: 'No visitor found!'
                        });
                    }

                    console.log("Found Visitor: " + visitor);

                    return res.status(200).json(visitor);
                });
        } else {
            return res.status(200).json({
                message: 'no date sent'
            });
        }
    });

    app.route('/getvisitors_sincedate').get(function (req, res) {
        console.log('Getting visitor');
        if (req.query.date) {
            var currDate = new Date(req.query.date);
            Visitor.find({
                    'visited_on': {
                        '$gte': currDate
                    }
                },
                function (err, visitor) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (visitor == null) {
                        console.log('Visitor is null ');
                        return res.status(500).json({
                            message: 'No visitor found!'
                        });
                    }

                    console.log("Found Visitor: " + visitor);

                    return res.status(200).json(visitor);
                });
        } else {
            return res.status(200).json({
                message: 'no date sent'
            });
        }
    });

    app.route('/getvisitors_forproduct').get(function (req, res) {
        console.log('Getting visitor');
        if (req.query.id) {
            Visitor.find({
                    product: req.query.id
                },
                function (err, visitor) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (visitor == null) {
                        console.log('Visitor is null ');
                        return res.status(500).json({
                            message: 'No visitor found!'
                        });
                    }

                    console.log("Found Visitor: " + visitor);

                    return res.status(200).json(visitor);
                });
        } else {
            return res.status(200).json({
                message: 'no date sent'
            });
        }
    });

};
