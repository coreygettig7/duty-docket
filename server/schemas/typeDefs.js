// Import GQL tagged Template Function
const { gql } = require('apollo-server-express');

// Create typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Query {
        me: User
        users: [User]
        user(firstName: String!, lastName: String!, email: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    }

    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;
