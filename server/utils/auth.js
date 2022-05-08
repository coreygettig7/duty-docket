const jwt = require('jsonwebtoken');

const secret = 'superdutysecret';
const expiration = '4h';

module.exports = {
  signToken: function({ firstName, lastName, email, _id }) {
    const payload = { firstName, lastName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};