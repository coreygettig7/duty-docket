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
    },
    dependent: {
      type: String,
      required: 'You need to delegate this duty to someone!',
      minlength: 1,
      maxlenth: 20
    },
    dueDate: {
      type: Date,
      default: Date.now
    }

});

const Duty = model('Duty', dutySchema);

module.exports = Duty;