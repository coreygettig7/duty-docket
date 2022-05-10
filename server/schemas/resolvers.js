const { AuthenticationError } = require('apollo-server-express');
//const { signToken } = require('../utils/auth');
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
            //const token = signToken(user);

            return { user };
        },

        addDependent: async (parent, args) => {
            const newDependent = await Dependent.create(args);
                
            return newDependent;
        },

        addDuty: async (parent, { dependent }, context) => {
            if (context.dependent) {
                const duty = new Duty({ dependent });

                await Dependent.findByIdAndUpdate(
                    context.dependent._id,
                    { $push: { duties: duty }}
                );
                return duty;
            }
            
                //throw new AuthenticationError('Please login to continue');
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
                    { $push: { duties: findUser.Duty } },
                    { new: true }
                );
            }
                //throw AuthenticationError('Please login to continue');
        },

        removeDuty: async (parent, { _id }, context) => {
            if (context.user) {
                return await Duty.findOneAndDelete({ _id: _id });
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