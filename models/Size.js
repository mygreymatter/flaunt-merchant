//create an Index for the model in the mongo shell using the following command
//db.sizes.ensureIndex({men:1,women:1},{unique:true})
//men & women must be unique

//referred http://www.fashionara.com/guide

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , sizeSchema = new Schema({
        men_dress: {
            top: {
                s: {
                    collar: {
                        type: [Number]
                    }
                    , chest: {
                        type: [Number]
                    }
                    , sleeve: {
                        type: [Number]
                    }
                }
                , m: {
                    collar: {
                        type: [Number]
                    }
                    , chest: {
                        type: [Number]
                    }
                    , sleeve: {
                        type: [Number]
                    }
                }
                , l: {
                    collar: {
                        type: [Number]
                    }
                    , chest: {
                        type: [Number]
                    }
                    , sleeve: {
                        type: [Number]
                    }
                }
                , xl: {
                    collar: {
                        type: [Number]
                    }
                    , chest: {
                        type: [Number]
                    }
                    , sleeve: {
                        type: [Number]
                    }
                }
                , xxl: {
                    collar: {
                        type: [Number]
                    }
                    , chest: {
                        type: [Number]
                    }
                    , sleeve: {
                        type: [Number]
                    }
                }
            }
            , bottom: {
                s: {
                    waist: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , m: {
                    waist: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , l: {
                    waist: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , xl: {
                    waist: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , xxl: {
                    waist: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
            }
        }
        , women_dress: {
            top: {
                s: {
                    bust: {
                        type: [Number]
                    }
                    , waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                }
                , m: {
                    bust: {
                        type: [Number]
                    }
                    , waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                }
                , l: {
                    bust: {
                        type: [Number]
                    }
                    , waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                }
                , xl: {
                    bust: {
                        type: [Number]
                    }
                    , waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                }
                , xxl: {
                    bust: {
                        type: [Number]
                    }
                    , waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                }
            }
            , bottom: {
                s: {
                    waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , m: {
                    waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , l: {
                    waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , xl: {
                    waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
                , xxl: {
                    waist: {
                        type: [Number]
                    }
                    , hip: {
                        type: [Number]
                    }
                    , inseam: {
                        type: [Number]
                    }
                }
            }
        }
        , men_footwear: {
            six: {
                size: Number
                , length: Number
            }
            , seven: {
                size: Number
                , length: Number
            }
            , eight: {
                size: Number
                , length: Number
            }
            , nine: {
                size: Number
                , length: Number
            }
            , ten: {
                size: Number
                , length: Number
            }
            , eleven: {
                size: Number
                , length: Number
            }
            , tweleve: {
                size: Number
                , length: Number
            }

        }
        , women_footwear: {
            three: {
                size: Number
                , length: Number
            }
            , four: {
                size: Number
                , length: Number
            }
            , five: {
                size: Number
                , length: Number
            }
            , six: {
                size: Number
                , length: Number
            }
            , seven: {
                size: Number
                , length: Number
            }
            , eight: {
                size: Number
                , length: Number
            }
        }
        , men_belt: {
            s: {
                size: [Number]
                , length: [Number]
            }
            , m: {
                size: [Number]
                , length: [Number]
            }
            , l: {
                size: [Number]
                , length: [Number]
            }
            , xl: {
                size: [Number]
                , length: [Number]
            }
            , xxl: {
                size: [Number]
                , length: [Number]
            }
        }
        , boy_dress: {
            top: {
                xxs: {
                    size: Number
                    , age: [Number]
                }
                , xs: {
                    size: Number
                    , age: [Number]
                }
                , s: {
                    size: Number
                    , age: [Number]
                }
                , m: {
                    size: Number
                    , age: [Number]
                }
                , l: {
                    size: Number
                    , age: [Number]
                }
                , xl: {
                    size: Number
                    , age: [Number]
                }
                , xxl: {
                    size: Number
                    , age: [Number]
                }
                , xxxl: {
                    size: Number
                    , age: [Number]
                }
            }
            , bottom: {
                xxs: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xs: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , s: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , m: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , l: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xl: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xxl: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xxxl: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
            }
        }
        , girl_dress: {
            top: {
                xxs: {
                    size: Number
                    , age: [Number]
                }
                , xs: {
                    size: Number
                    , age: [Number]
                }
                , s: {
                    size: Number
                    , age: [Number]
                }
                , m: {
                    size: Number
                    , age: [Number]
                }
                , l: {
                    size: Number
                    , age: [Number]
                }
                , xl: {
                    size: Number
                    , age: [Number]
                }
                , xxl: {
                    size: Number
                    , age: [Number]
                }
                , xxxl: {
                    size: Number
                    , age: [Number]
                }
            }
            , bottom: {
                xxs: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xs: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , s: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , m: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , l: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xl: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xxl: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
                , xxxl: {
                    size: [Number]
                    , age: [Number]
                    , height: [Number]
                    , waist: [Number]
                }
            }
        }

    }, {
        autoIndex: false
    });

var Size = mongoose.model('Size', sizeSchema);

module.exports = Size;