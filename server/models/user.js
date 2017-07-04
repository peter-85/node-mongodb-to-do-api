let mongoose = require('mongoose');


let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    // password: {
    //     required: true
    // }
})

module.exports = { User };