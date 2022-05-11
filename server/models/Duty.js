const { Schema, model } = require('mongoose');
const dependentSchema = require('./Dependent');
const dutySchema = new Schema(
  {
    dutyText: {
      type: String,
      required: 'You need to enter a duty!',
      minlength: 3,
      maxlength: 280
    },
    dutyValue: {
      type: Number,
    },
    username: {
      type: String,
      required: true
    },
    dependent: [dependentSchema],
    dueDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Duty = model('Duty', dutySchema);
module.exports = Duty;