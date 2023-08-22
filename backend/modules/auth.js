const mongoose = require('mongoose');
const authSchema = mongoose.Schema({
    name: {
        type: String, require: true
    },
    number:{
        type: String, require: true
    },
})

module.exports = mongoose.model("auth" , authSchema)