const { gql } = require('apollo-server');


const typeDefs = gql`
  type Query {
    message: String
  }
  type Mutation {
    uploadVideos(filename: String!, file: String!): String
  }
`;

module.exports = typeDefs;