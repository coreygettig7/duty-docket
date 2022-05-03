const { AuthenicateError } = require('apollo-server-express');
const User = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select("-__v -password")

                    return userData;
            }
            //throw new AuthenicateError("Not logged in");
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, { firstName, lastName }) => {
            return User.findOne({ firstName, lastName })
                .select('-__v -password')
        }
    },

};

module.exports = resolvers;