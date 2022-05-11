const { Schema, model } = require('mongoose');

const doerSchema = new Schema (
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 20
    },
    username: {
      type: String,
      required: true
    }
  }
);
module.exports = doerSchema;