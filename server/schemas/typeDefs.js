// Import GQL tagged Template Function
const { gql } = require('apollo-server-express');

// Create typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        lastName: String
        dependentCount: Int
        duties: [Duty]
        dependents: []
    }

    type Query {
        me: User
        users: [User]
        user(firstName: String!, lastName: String!, email: String!): User
    }

`;

module.exports = typeDefs;
