const { AuthenticationError } = require('apollo-server-express');
//const { signToken } = require('../utils/auth');
const { User, Dependent, Duty } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select("-__v -password")
                    .populate('dependents')

                    return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
                .populate('dependents')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('dependents')
        },
        dependent: async(parent, { dependentName }) => {
            return Dependent.findOne({ dependentName })
        },
        duties: async() => {
            return await Duty.find()
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            //const token = signToken(user);

            return user;
        },

        addDependent: async (parent, args) => {
            const newDependent = await Dependent.create(args);

            await User.findOneAndUpdate(
                { _id: args.user_id },
                { $push: { dependents: newDependent._id } },
                { new: true }
            )
                
            return newDependent;
        },

        addDuty: async (parent, args) => {
            const newDuty = await Duty.create(args)

            await Dependent.findOneAndUpdate(
                { _id: args.dependent_id },
                { $push: { duties: newDuty._id } },
                { new: true }
            )
                return newDuty;
            
                //throw new AuthenticationError('Please login to continue');
        },

        updateDuty: async (parent, args) => {
            const updateduty = await Duty.findByIdAndUpdate(
                { _id: args._id },
                args,
                { new: true }
            )
                return updateduty;
            
                //throw AuthenticationError('Please login to continue');
        },

        removeDuty: async (parent, { dependentId, dutyId }, context) => {
            if (context.user) {
                const deleteDuty = await Dependent.findOneAndUpdate(
                    { _id: dutyId },
                    { $pull: { duties: { _id: dutyId } } },
                    { new: true }
                )

                return deleteDuty;
            }
               // throw AuthenticationError('Please login to continue');
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect credentials');
            }
            //const token = signToken(user);
            return { user };
        }
    }

};

module.exports = resolvers;