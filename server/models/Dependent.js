const { Schema, model } = require('mongoose');

const dependentSchema = new Schema (
  {
    dependentName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
    },
    username: {
      type: String,
      required: true
    }
  }
);
module.exports = dependentSchema