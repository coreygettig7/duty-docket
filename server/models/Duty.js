const { Schema, model } = require('mongoose');

const dutySchema = new Schema(
  {
    dutyTitle: {
      type: String,
      required: 'You need to enter a duty!',
      minlength: 3,
      maxlength: 280
    },
    dependent: {
      type: String,
      required: 'You need to delegate this duty to someone!',
      minlength: 1,
      maxlenth: 20
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
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