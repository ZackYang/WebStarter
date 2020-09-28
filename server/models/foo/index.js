const { gql } = require('apollo-server');

module.exports = (sequelize, types) => {
  const model = sequelize.define("Foo", {
    name: types.STRING
  }, {})

  model.typeDefs = gql`
    type Foo {
      name: String
    }

    type Query {
      foos: [Foo]
    }
  `;

  model.resolvers = {
    Query: {
      foos: () => [{
        name: 'Hello Foo'
      }],
    },
  };

  return model;
};
