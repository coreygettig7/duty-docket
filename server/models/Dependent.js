const { Schema, model } = require('mongoose');
const dependentSchema = new Schema (
  {
    dependentName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 20
    }
  }
);

module.exports = dependentSchema;
