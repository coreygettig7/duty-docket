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
    duties: [dutySchema]
},
    {
        toJSON: {
            getters: true
        }
    }
);

dependentSchema.virtual('dutyCount').get(function() {
    return this.duties.length;
});

const Dependent = model('Dependent', dependentSchema);

module.exports = Dependent;