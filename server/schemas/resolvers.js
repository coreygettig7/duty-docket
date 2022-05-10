const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Dependent, Duty } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select("-__v -password")

                    return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, { firstName, lastName }) => {
            return User.findOne({ firstName, lastName })
                .select('-__v -password')
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addDependent: async (parent, { firstName, lastName }, context) => {
            if (context.user) {
                const newDependent = await Dependent.create({
                    firstName,
                    lastName,
                    user: context.user.dependent
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { dependents: newDependent._id } },
                    { new: true }
                );
                
                return newDependent;
            }
                throw new AuthenticationError('Please login to continue');
        },

        addDuty: async (parent, { duty }, context) => {
            if (context.user) {
                const newDuty = await Duty.create({
                    dutyName,
                    dutyValue,
                    dutyDescription,
                    user: context.user.duty
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { duty: newDuty._id } },
                    { new: true }
                );
                return newDuty;
            }
                throw new AuthenticationError('Please login to continue');
        },

        updateDuty: async (parent, args, context) => {
            if (context.user) {
                let finduser = await User.findOne({
                    _id: context.user._id,
                });

                let Duty = finduser.duties.find((Duty) => {
                    return Duty._id === args._id;
                });

                Duty.dutyName = args.dutyName;
                Duty.dutyValue = args.dutyValue;
                duty.dutyDescription = args.dutyDescription;

                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $set: { duties: findUser.Duty } },
                    { new: true }
                );
            }
                throw AuthenticationError('Please login to continue');
        },

        removeDuty: async (parent, { _id }, context) => {
            if (context.user) {
                return await Duty.findOneAndDelete({ _id: _id });
            }
                throw AuthenticationError('Please login to continue');
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
            const token = signToken(user);
            return { token, user };
        }
    }

};

module.exports = resolvers;