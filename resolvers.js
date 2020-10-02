const { data } = require("./data.js")
const { devices } = data;

exports.resolvers = {
  Query: {
    device: (parent, args) => {
      return devices[0];
    }
  }
}