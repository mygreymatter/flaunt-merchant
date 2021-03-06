module.exports = function (app) {
    var Size = require('../models/Size');

    app.route('/size')
        .post(function (req, res) {

            //without this parameter in the request 
            //size data cannot be chaned
            if (req.body.sauce === '1234') {
                var size = new Size();
                size.men_dress = {
                        top: {
                            s: {
                                "collar": [36, 38]
                                , "chest": [86, 91]
                                , "sleeve": [56, 58.5]
                            }
                            , m: {
                                "collar": [38, 40]
                                , "chest": [96, 102]
                                , "sleeve": [58.5, 61]
                            }
                            , l: {
                                "collar": [40, 42]
                                , "chest": [107, 112]
                                , "sleeve": [61, 63.5]
                            }
                            , xl: {
                                "collar": [43, 44.5]
                                , "chest": [117, 122]
                                , "sleeve": [63.5, 66]
                            }
                            , xxl: {
                                "collar": [45.5, 47]
                                , "chest": [127, 132]
                                , "sleeve": [66, 68.5]
                            }
                        }
                        , bottom: {
                            "s": {
                                "waist": [74, 79]
                                , "inseam": [76]
                            }
                            , "m": {
                                "waist": [81, 86]
                                , "inseam": [79]
                            }
                            , "l": {
                                "waist": [86, 92]
                                , "inseam": [81]
                            }
                            , "xl": {
                                "waist": [92, 96]
                                , "inseam": [84]
                            }
                            , "xxl": {
                                "waist": [96, 102]
                                , "inseam": [86]
                            }
                        }
                    }, size.women_dress = {
                        "top": {
                            "xs": {
                                "bust": [81, 84]
                                , "waist": [61, 66]
                                , "hip": [86, 89]
                            }
                            , "s": {
                                "bust": [86, 89]
                                , "waist": [66, 68.5]
                                , "hip": [91, 94]
                            }
                            , "m": {
                                "bust": [91, 96]
                                , "waist": [71, 76]
                                , "hip": [96, 102]
                            }
                            , "l": {
                                "bust": [99, 104]
                                , "waist": [79, 84]
                                , "hip": [104, 109]
                            }
                            , "xl": {
                                "bust": [107, 112]
                                , "waist": [86, 91]
                                , "hip": [112, 117]
                            }
                        }
                        , "bottom": {
                            "xs": {
                                "waist": [61, 66]
                                , "hip": [81, 89]
                                , "inseam": [74]
                            }
                            , "s": {
                                "waist": [66, 71]
                                , "hip": [89, 94]
                                , "inseam": [76]
                            }
                            , "m": {
                                "waist": [71, 76]
                                , "hip": [94, 99]
                                , "inseam": [79]
                            }
                            , "l": {
                                "waist": [76, 81]
                                , "hip": [102, 107]
                                , "inseam": [81]
                            }
                            , "xl": {
                                "waist": [81, 86]
                                , "hip": [107, 112]
                                , "inseam": [84]
                            }
                        }
                    }
                    , size.men_footwear = {
                        six: {
                            "size": 6
                            , "length": 25.4
                        }
                        , seven: {
                            "size": 7
                            , "length": 25.7
                        }
                        , eight: {
                            "size": 8
                            , "length": 26
                        }
                        , nine: {
                            "size": 9
                            , "length": 26.7
                        }
                        , ten: {
                            "size": 10
                            , "length": 27.3
                        }
                        , eleven: {
                            "size": 11
                            , "length": 30
                        }
                        , tweleve: {
                            "size": 12
                            , "length": 30.7
                        }
                    }
                    , size.women_footwear = {
                        three: {
                            "size": 3
                            , "length": 23.1
                        }
                        , four: {
                            "size": 4
                            , "length": 23.8
                        }
                        , five: {
                            "size": 5
                            , "length": 24.5
                        }
                        , six: {
                            "size": 6
                            , "length": 25.1
                        }
                        , seven: {
                            "size": 7
                            , "length": 25.4
                        }
                        , eight: {
                            "size": 8
                            , "length": 25.7
                        }
                    }
                    , size.men_belt = {
                        "s": {
                            "size": [29, 31]
                            , "length": [74, 79]
                        }
                        , "m": {
                            "size": [32, 34]
                            , "length": [81, 86]
                        }
                        , "l": {
                            "size": [36, 38]
                            , "length": [92, 96]
                        }
                        , "xl": {
                            "size": [40, 42]
                            , "length": [102, 107]
                        }
                        , "xxl": {
                            "size": [44, 46]
                            , "length": [112, 117]
                        }
                    }
                    , size.boy_dress = {
                        "top": {
                            "xxs": {
                                "size": 2
                                , "age": [3, 4]
                            }
                            , "xs": {
                                "size": 4
                                , "age": [4, 5]
                            }
                            , "s": {
                                "size": 6
                                , "age": [5, 6]
                            }
                            , "m": {
                                "size": 8
                                , "age": [7, 8]
                            }
                            , "l": {
                                "size": 10
                                , "age": [9, 10]
                            }
                            , "xl": {
                                "size": 12
                                , "age": [11, 12]
                            }
                            , "xxl": {
                                "size": 14
                                , "age": [13, 14]
                            }
                            , "xxxl": {
                                "size": 16
                                , "age": [15, 16]
                            }
                        }
                        , "bottom": {
                            "xxs": {
                                "size": [22, 24]
                                , "age": [3, 5]
                                , "height": [91, 106]
                                , "waist": [51, 56]
                            }
                            , "xs": {
                                "size": [26]
                                , "age": [5, 6]
                                , "height": [112, 117]
                                , "waist": [56, 58]
                            }
                            , "s": {
                                "size": [28]
                                , "age": [6, 7]
                                , "height": [117, 122]
                                , "waist": [58, 61]
                            }
                            , "m": {
                                "size": [30, 32]
                                , "age": [7, 9]
                                , "height": [127, 142]
                                , "waist": [61, 66]
                            }
                            , "l": {
                                "size": [34]
                                , "age": [9, 10]
                                , "height": [147, 152]
                                , "waist": [66, 69]
                            }
                            , "xl": {
                                "size": [36]
                                , "age": [11, 12]
                                , "height": [157, 162]
                                , "waist": [69, 71]
                            }
                            , "xxl": {
                                "size": [38]
                                , "age": [13, 14]
                                , "height": [167, 172]
                                , "waist": [71, 74]
                            }
                            , "xxxl": {
                                "size": [40]
                                , "age": [15, 16]
                                , "height": [177, 182]
                                , "waist": [74, 78]
                            }
                        }
                    }
                    , size.girl_dress = {
                        "top": {
                            "xxs": {
                                "size": 2
                                , "age": [3, 4]
                            }
                            , "xs": {
                                "size": 4
                                , "age": [4, 5]
                            }
                            , "s": {
                                "size": 6
                                , "age": [5, 6]
                            }
                            , "m": {
                                "size": 8
                                , "age": [7, 8]
                            }
                            , "l": {
                                "size": 10
                                , "age": [9, 10]
                            }
                            , "xl": {
                                "size": 12
                                , "age": [11, 12]
                            }
                            , "xxl": {
                                "size": 14
                                , "age": [13, 14]
                            }
                            , "xxxl": {
                                "size": 16
                                , "age": [15, 16]
                            }
                        }
                        , "bottom": {
                            "xxs": {
                                "size": [22]
                                , "age": [3, 4]
                                , "height": [91, 96]
                                , "waist": [51, 53]
                            }
                            , "xs": {
                                "size": [24]
                                , "age": [4, 5]
                                , "height": [99, 106]
                                , "waist": [53, 56]
                            }
                            , "s": {
                                "size": [26, 28]
                                , "age": [5, 7]
                                , "height": [112, 122]
                                , "waist": [56, 61]
                            }
                            , "m": {
                                "size": [30, 32]
                                , "age": [7, 9]
                                , "height": [127, 142]
                                , "waist": [61, 66]
                            }
                            , "l": {
                                "size": [34]
                                , "age": [9, 10]
                                , "height": [147, 152]
                                , "waist": [66, 69]
                            }
                            , "xl": {
                                "size": [36]
                                , "age": [11, 12]
                                , "height": [157, 162]
                                , "waist": [69, 71]
                            }
                            , "xxl": {
                                "size": [38]
                                , "age": [13, 14]
                                , "height": [167, 172]
                                , "waist": [71, 74]
                            }
                            , "xxxl": {
                                "size": [40]
                                , "age": [15, 16]
                                , "height": [177, 182]
                                , "waist": [74, 78]
                            }
                        }
                    };
            } else {
                return res.status(200).json({
                    message: 'success'
                });
            }
            size.save(function (err) {
                if (err) {
                    console.log('Save Error: ' + err.code + ' ' + err.message);
                    if (err.code === 11000)
                        return res.status(500).json({
                            message: 'Size already exists'
                        });
                }
                console.log('Saved: ' + size);
                return res.json();

            });

        }).get(function (req, res) {
            console.log('Getting size');

            Size.findOne({}
                , function (err, size) {
                    if (err) {
                        console.log("Found Error: " + err);
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    if (size == null) {
                        console.log('Size is null ');
                        return res.status(500).json({
                            message: 'No size found!'
                        });
                    }

                    console.log("Found Size: " + size);

                    return res.status(200).json(size);
                });

        });
};