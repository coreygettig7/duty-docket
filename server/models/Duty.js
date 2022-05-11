const { Schema, model } = require('mongoose');
const doerSchema = require('./Doer');
const formatDate = require('../utils/formatDate');

const dutySchema = new Schema(
  {
    dutyText: {
      type: String,
      required: 'You need to enter a duty!',
      minlength: 3,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    dutyDistinction: {
      type: String,
      required: true
    },
    dutyDeposit: {
      type: String
    },
    dutyDoer: [doerSchema],
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => formatDate(timestamp)
    },
    dueDate: {
      type: Date,
      default: Date.now,
      get: timestamp => formatDate(timestamp)
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