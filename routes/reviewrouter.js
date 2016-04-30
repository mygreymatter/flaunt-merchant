module.exports = function (app) {
    var Review = require('../models/Review');


    app.route('/review')
        .post(function (req, res) {
            console.log("Create Review: " + req.body.by + ' ' + req.body.content + ' ' + req.body.for);

            var review = new Review();

            review.by = req.body.by;
            review.content = req.body.content;
            review.for = req.body.for;

            review.save(function (err) {
                if (err) {
                    console.log('Save Error: ' + err.code + ' ' + err.message);
                    if (err.code === 11000)
                        return res.status(500).json({
                            message: 'Review already exists'
                        });
                }
                console.log('Saved: ' + review);
                return res.json();

            });

        }).get(function (req, res) {
            console.log('Getting review');
            if (req.query.id) {
                Review.findOne({
                    '_id': req.query.id
                }, function (err, review) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (review == null) {
                        console.log('Review is null ');
                        return res.status(500).json({
                            message: 'No review found!'
                        });
                    }

                    console.log("Found Review: " + review);

                    return res.status(200).json(review);
                });
            } else {
                Review.find({}, function (err, reviews) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (reviews == null) {
                        console.log('Review is null ');
                        return res.status(500).json({
                            message: 'No review found!'
                        });
                    }

                    console.log("Found Reviews: " + reviews);

                    return res.status(200).json(reviews);
                });
            }
        }).put(function (req, res) {
            console.log('Updating Review');
            if (!req.body.id) {
                return res.status(500).json({
                    status: 'id has not been sent!'
                });
            } else {
                Review.findByIdAndUpdate(req.body.id, {
                    content: req.body.content
                }, function (err, review) {
                    if (err) {
                        console.log('Updating Review failed: ' + err);
                        return res.status(500).json({
                            status: 'Updating Review failed!'
                        });
                    }
                    console.log('Updated Review - success: ' + review);
                    return res.json({
                        status: 'success'
                        , id: req.body.id
                    });
                });
            }

        }).delete(function (req, res) {
            console.log('Deleting Review');
            if (!req.body.id) {
                return res.status(500).json({
                    status: 'id has not been sent!'
                });
            } else {
                Review.findByIdAndRemove(req.body.id, function (err) {
                    if (err) {
                        console.log('Remove Review failed: ' + err);
                        return res.status(500).json({
                            status: 'Remove Review failed!'
                        });
                    }
                    return res.json({
                        status: 'success'
                    });
                });
            }


        });
};