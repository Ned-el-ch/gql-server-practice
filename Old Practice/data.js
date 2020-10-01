exports.data = {
  libraries: [
    {
      id: 1,
      branch: 'Downtown',
      city: "London"
    },
    {
      id: 2,
      branch: 'Riverside',
      city: "London"
    },
  ],
  books: [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      branch: 'Riverside',
      publisher: "Faux Books",
      year: 1998
    },
    {
      id: 2,
      title: 'Jurassic Park',
      author: 'Michael Crichton',
      branch: 'Downtown',
      publisher: "Faux Books",
      year: 2012
    },
    {
      id: 3,
      title: 'The Thing',
      author: 'Michael Crichton',
      branch: 'Riverside',
      publisher: "Real Books",
      year: 2005
    },
  ],
  publishers: [
    {
      id: 1,
      name: 'Faux Books',
      genre: "Fiction"
    },
    {
      id: 2,
      name: 'Real Books',
      genre: "Non-Fiction"
    },
  ]
}