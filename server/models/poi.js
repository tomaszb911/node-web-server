var mongoose = require('mongoose');

var Poi = mongoose.model('Poi', {
    coords: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    label: {
        type: String,
        required: true,
        minlength:1,
        trim:true
    }
});

module.exports = {Poi};