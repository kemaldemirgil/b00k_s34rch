const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
    },

    users: async () => {
      return await User.find().select('-__v -password').populate('savedBooks');
    },

    user: async (parent, { username }) => {
      return await User.findOne({ username }).select('-__v -password').populate('savedBooks');
    }

    
    // getSingleUser: async (parent, { params }) => {
    //   return User.findOne({ _id: params.id });
    // },

    // login: async (parent, { body }) => {
    //   return User.findOne({ $or: [{ username: body.username }, { email: body.email }] })
    // }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect Information...');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password...');
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('Request Error...');
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('Please Login...')
    }




    // createUser: async (parent, { body }) => {
    //   return User.create({ body });
    // },
    // saveBook: async (parent, { user, body }) => {
    //   return User.findOneAndUpdate(
    //     { _id: user._id },
    //     { $addToSet: { savedBooks: body } },
    //     { new: true, runValidators: true }
    //   );
    // },
    // deleteBook: async (parent, { user, params }) => {
    //   return User.findOneAndUpdate(
    //     { _id: user._id },
    //     { $pull: { savedBooks: { bookId: params.bookId } } },
    //     { new: true }
    //   );
    // }

  },
};

module.exports = resolvers;