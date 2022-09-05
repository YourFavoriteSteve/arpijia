const mongoose = require('mongoose')

const abilitySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name value is required']
    },
    cost: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Ability', abilitySchema)