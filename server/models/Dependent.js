const { Schema, model } = require('mongoose');
const dutySchema = require('./Duty');

const dependentSchema = new Schema({
    dependentName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    }
});

const Dependent = model('Dependent', dependentSchema);

module.exports = Dependent;