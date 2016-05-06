module.exports = function (app) {
    var Store = require('../models/Store');

    function getArrayFromString(s) {
        s = s.replace(/'/g, '"');
        return JSON.parse(s);
    }


    app.route('/store')
        .post(function (req, res) {
            console.log("\n\n----------------------------------\n\n");
            console.log("Create Store: ");

            var store = new Store();
            store.name = req.body.name;
            store.license = req.body.license;
            store.landmark = req.body.landmark;
            store.area_id = req.body.area._id;
            store.business_type = [];

            req.body.types.forEach(function (type) {
                if (type.checked) {
                    store.business_type.push(type.name);
                }
            });

            console.log('Business Type: ' + store.business_type);
            store.date_of_establishment = new Date(req.body.date_of_establishment);

            //converts array in the form of string into an array
            //"["a","b"]"  ====> ["a","b"]
            /*req.body.business_type = getArrayFromString(req.body.business_type);
            console.log('Arr: ' + req.body.business_type);

            req.body.business_type.forEach(function (value) {
                store.business_type.push(value);
            });*/



            store.save(function (err) {
                if (err) {
                    console.log('Save Error: ' + err.code + ' ' + err.message);
                    if (err.code === 11000)
                        return res.status(500).json({
                            message: 'Store already exists'
                        });
                }
                console.log('Saved: ' + store);
                return res.json();

            });
            /*         return res.status(200).json({
                      message: 'success'
                  });*/

        }).get(function (req, res) {
            console.log('Getting store');
            if (req.query.id) {
                Store.findOne({
                        '_id': req.query.id
                    },
                    function (err, store) {
                        if (err) {
                            console.log("Found Error: " + err);
                            return res.status(500).json({
                                message: err.message
                            });
                        }

                        if (store == null) {
                            console.log('Store is null ');
                            return res.status(500).json({
                                message: 'No store found!'
                            });
                        }

                        console.log("Found Store: " + store);

                        return res.status(200).json(store);
                    });
            } else {
                Store.find({}, function (err, stores) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (stores == null) {
                        console.log('Store is null ');
                        return res.status(500).json({
                            message: 'No store found!'
                        });
                    }

                    console.log("Found Stores: " + stores);

                    return res.status(200).json(stores);
                });
            }
        }).put(function (req, res) {
            console.log('Updating Store');

            //converts array in the form of string into an array
            //"["a","b"]"  ====> ["a","b"]
            req.body.business_type = getArrayFromString(req.body.business_type);
            console.log('Arr: ' + req.body.business_type);

            var store_type = [];
            req.body.business_type.forEach(function (value) {
                store_type.push(value);
            });
            console.log('Store Type: ' + store_type);

            Store.findByIdAndUpdate(req.body.id, {
                name: req.body.name,
                license: req.body.license,
                landmark: req.body.landmark,
                area: req.body.area,
                business_type: store_type,
                date_of_establishment: new Date(req.body.date_of_establishment)
            }, function (err, store) {
                if (err) {
                    console.log('Updating Store failed: ' + err);
                    return res.status(500).json({
                        status: 'Updating Store failed!'
                    });
                }
                console.log('Updated Store - success: ' + store);
                return res.json({
                    status: 'success',
                    id: req.body.id
                });
            });

        }).delete(function (req, res) {
            console.log('Deleting Store');

            Store.findByIdAndRemove(req.body.id, function (err) {
                if (err) {
                    console.log('Remove Store failed: ' + err);
                    return res.status(500).json({
                        status: 'Remove Store failed!'
                    });
                }
                return res.json({
                    status: 'success'
                });
            });

        });
};
