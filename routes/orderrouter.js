module.exports = function (app) {
    var Order = require('../models/Order');

    app.route('/order')
        .post(function (req, res) {
            console.log("Create Order: " + req.body.payment);

            var order = new Order();
            order.by = req.body.by;
            order.payment = JSON.parse(req.body.payment);
            order.for = req.body.for;
            order.status = req.body.status;
            order.quantity = req.body.quantity;
            order.created_at = new Date();
            order.updated_at = order.created_at;

            order.save(function (err) {
                if (err) {
                    console.log('Save Error: ' + err.code + ' ' + err.message);
                    if (err.code === 11000)
                        return res.status(500).json({
                            message: 'Order already exists'
                        });
                }
                console.log('Saved: ' + order);
                return res.json();

            });

        }).get(function (req, res) {
            console.log('Getting order');
            if (req.query.id) {
                Order.findOne({
                    '_id': req.query.id
                }, function (err, order) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (order == null) {
                        console.log('Order is null ');
                        return res.status(500).json({
                            message: 'No order found!'
                        });
                    }

                    console.log("Found Order: " + order);

                    return res.status(200).json(order);
                });
            } else {
                Order.find({}, function (err, orders) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (orders == null) {
                        console.log('Order is null ');
                        return res.status(500).json({
                            message: 'No order found!'
                        });
                    }

                    console.log("Found Orders: " + orders);

                    return res.status(200).json(orders);
                });
            }
        }).put(function (req, res) {
            console.log('Updating Order');
            if (!req.body.id) {
                return res.status(500).json({
                    status: 'id has not been sent!'
                });
            } else {
                console.log('Status: ' + req.body.status);
                Order.findByIdAndUpdate(req.body.id, {
                    status: req.body.status,
                    updated_at: new Date()
                }, function (err, order) {
                    if (err) {
                        console.log('Updating Order failed: ' + err);
                        return res.status(500).json({
                            status: 'Updating Order failed!'
                        });
                    }
                    console.log('Updated Order - success: ' + order);
                    return res.json({
                        status: 'success',
                        id: req.body.id
                    });
                });
            }

        });
};
