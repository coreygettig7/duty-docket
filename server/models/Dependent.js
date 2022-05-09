const { Schema, model } = require('mongoose');
const dutySchema = require('./Duty');

const dependentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
},
    {
        toJSON: {
            getters: true
        }
    }
);


const Dependent = model('Dependent', dependentSchema);

module.exports = Dependent;