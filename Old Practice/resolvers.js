const { data } = require("./data.js")
const { libraries, books, publishers } = data;
exports.resolvers = {
  Query: {
    libraries: (parent, args) => {
      if (args.city) {
        return libraries.filter(library => library.city === args.city)
      }
      return libraries;
    },
    library: (parent, args) => {
      return libraries.filter(library => library.id === args.id)[0]
    },
    books: (parent, args) => {
      if (args.last) {
        return books.filter((book, index) => index >= books.length - args.last)
      } else if (args.publisher) {
        return books.filter(book => book.publisher === args.publisher)
      } else {
        return books;
      }
    },
    book: (parent, args) => {
      return books.filter(book => book.id === args.id)[0]
    },
    publishers: (parent, args) => {
      if (args.name) {
        return publishers.filter(pub => pub.name === args.name)
      }
      if (args.genre) {
        return publishers.filter(pub => pub.genre === args.genre)
      }
      return publishers
    }
  },
  Library: {
    books: (parent, args) => {
      let branchBooks = books.filter(book => book.branch === parent.branch)
      if (args.publisher) {
        branchBooks = branchBooks.filter(book => book.branch === parent.branch && book.publisher === args.publisher);
      }
      if (args.yearRange) {
        branchBooks = branchBooks.filter(book => {
          return book.year >= args.yearRange.start && book.year <= args.yearRange.end
        })
      }
      return branchBooks;
    }
  },
  Book: {

    // The parent resolver (Library.books) returns an object with the
    // author's name in the "author" field. Return a JSON object containing
    // the name, because this field expects an object.
    author: (parent) => {
      return {
        name: parent.author
      };
    },
    publisher: (parent) => {
      return {
        name: parent.publisher
      }
    }
  },
  Author: {
    books: (parent) => {
      return books.filter(book => book.author === parent.name)
    }
  },
  Publisher: {
    books: (parent, args) => {
      console.log(parent)
      let publisherBooks = books.filter(book => book.publisher === parent.name)
      if (args.yearRange) {
        console.log(args)
        publisherBooks = publisherBooks.filter(book => {
          return book.year >= args.yearRange.start && book.year <= args.yearRange.end
        })
      }
      return publisherBooks;
    }
  }

  // Because Book.author returns an object with a "name" field,
  // Apollo Server's default resolver for Author.name will work.
  // We don't need to define one.
};