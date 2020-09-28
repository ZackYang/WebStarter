const express = require('express')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { ApolloServer } = require('apollo-server');

const app = express()
const port = 3000

const sequelize = new Sequelize('sqlite::memory:')

const Foo = require('./models/foo')(sequelize, DataTypes);
const server = new ApolloServer({ typeDefs: Foo.typeDefs, resolvers: Foo.resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
