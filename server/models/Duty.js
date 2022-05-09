const { Schema, model } = require('mongoose');

const dutySchema = new Schema({
    dutyName: {
        type: String,
        required: true,
        trim: true
    },
    dutyValue: {
        type: Number,
        required: true,
        minNum: 1.00
    },
    dutyDescription: {
        type: String,
        required: false,
        maxLength: 50
    }
});

const Duty = model('Duty', dutySchema);

module.exports = Duty;