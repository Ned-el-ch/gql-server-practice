const { data } = require("./data.js")
const { users } = data;

exports.resolvers = {
  Query: {
    users: (parent, args) => {
      return users;
    }
  }
}