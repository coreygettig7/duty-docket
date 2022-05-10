const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Dependent  = require('./Dependent');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    duties: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Duty'
        }
    ],
    dependents: [Dependent.schema]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

// Set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;