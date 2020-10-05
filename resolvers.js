const { data } = require("./data.js")
const { assets } = data;

exports.resolvers = {
  Query: {
    device: (parent, args) => {
      console.log(parent, args)
      return assets;
    },
    someAsset: (parent, args) => {
      console.log(parent, args)
      return assets
    }
  }
}