const { User, Duty } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // me query to look for authorization http headers context
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('duties');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    // get all duties or by the username
    duties: async (parent, { username }) => {
      const params = username ? { username }: {};
      return Duty.find(params).sort({ createdAt: -1 });
    },
    // get a single duty by it's Id
    duty: async (parent, { _id }) => {
      return Duty.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find() 
      .select('-__v -password')
      .populate('duties')
    },
    // get a user by their username
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select('-__v -password')
      .populate('duties');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect login credentials!');
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect login credentials!');
      }
      const token = signToken(user)
      return { token, user };
    },
    addDuty: async(parent, args, context) => {
      if (context.user) {
        const duty = await Duty.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id},
          { $push: { duties: duty._id } },
          { new: true }
        );
        return duty;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateDuty: async (parent, { dutyId, dutyText, dutyDistinction, dueDate, dutyDeposit }, context) => {
      if(context.user) {
        const duty = await Duty.findByIdAndUpdate(
          { _id: dutyId },
          { $set: { dutyText, dutyDistinction, dueDate, dutyDeposit }},
          { new: true }
        );
<<<<<<< HEAD
=======
            console.log(duty)
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { duties: duty._id } },
          { new: true }
        )
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
        return duty;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
<<<<<<< HEAD
    removeDuty: async (parent, { dutyId }, context) => {
      if (context.user) {

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { duties:  dutyId } },
          { new: true }
        ).populate('duties');

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
=======
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
    addDoer: async (parent, { dutyId, name }, context) => {
      if (context.user) {
        const updatedDuty = await Duty.findOneAndUpdate(
          { _id: dutyId },
          { $push: { dutyDoer: { name, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedDuty;
      }
      throw new AuthenticationError('You need to be logged in!');
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
  }
}

module.exports = resolvers;