const { AuthenticationError } = require('apollo-server')

const user = {
  _id: "1",
  name: "Reed",
  email: "reedbarger@yahoo.com",
  picture: "https://cloudinary.com/asdf"
};

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError('You must be logged in')
  }
  return next()
}

module.exports = {
  Query: {
    me: authenticated(() => ctx.currentUser)
  }
};
