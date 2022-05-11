const jwt = require('jsonwebtoken');

const secret = 'mysecretshhhh';

const expiration = '2h';

module.exports = {
  authMiddleware: function({ req }) {
    // allow token too be sent via req.body, req.query, or the http headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // separate the word "Bearer from token"
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    // if no token, return the req obj as it is
    if(!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token')
    }
    // return updated req object
    return req;
  },
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

}