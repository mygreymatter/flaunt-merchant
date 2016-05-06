module.exports = function (app) {
    var Area = require('../models/Area');


    app.route('/area')
        .post(function (req, res) {
            console.log("Create Area: " + req.body.name + ' ' + req.body.pincode);

            var area = new Area();

            area.name = req.body.name;
            area.pincode = req.body.pincode;

            area.save(function (err) {
                if (err) {
                    console.log('Save Error: ' + err.code + ' ' + err.message);
                    if (err.code === 11000)
                        return res.status(500).json({
                            message: 'Area already exists'
                        });
                }
                console.log('Saved: ' + area);
                return res.json();

            });

        }).get(function (req, res) {
            console.log('Getting area');
            if (req.query.id) {
                Area.findOne({
                        '_id': req.query.id
                    },
                    function (err, area) {
                        if (err) {
                            console.log("Found Error: " + err);
                            return res.status(500).json({
                                message: err.message
                            });
                        }

                        if (area == null) {
                            console.log('Area is null ');
                            return res.status(500).json({
                                message: 'No area found!'
                            });
                        }

                        console.log("Found Area: " + area);

                        return res.status(200).json(area);
                    });
            } else {
                Area.find({}, function (err, areas) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (areas == null) {
                        console.log('Area is null ');
                        return res.status(500).json({
                            message: 'No area found!'
                        });
                    }

                    console.log("Found Areas: " + areas);

                    return res.status(200).json(areas);
                });
            }
        }).put(function (req,
            res) {
            console.log('Updating Area');

            Area.findByIdAndUpdate(req.body.id, {
                pincode: req.body.pincode,
                name: req.body.name
            }, function (err, area) {
                if (err) {
                    console.log('Updating Area failed: ' + err);
                    return res.status(500).json({
                        status: 'Updating Area failed!'
                    });
                }
                console.log('Updated Area - success: ' + area);
                return res.json({
                    status: 'success',
                    id: req.body.id
                });
            });

        }).delete(function (req, res) {
            console.log('Deleting Area');

            Area.findByIdAndRemove(req.body.id, function (err) {
                if (err) {
                    console.log('Remove Area failed: ' + err);
                    return res.status(500).json({
                        status: 'Remove Area failed!'
                    });
                }
                return res.json({
                    status: 'success'
                });
            });

        });
};
