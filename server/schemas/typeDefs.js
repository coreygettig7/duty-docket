// Import GQL tagged Template Function
const { gql } = require('apollo-server-express');

// Create typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        dependents: [Dependent]
        duties: [Duty]
    }

    type Dependent {
        _id: ID
        dependentName: String
        duties: [Duty]
    }

    type Duty {
        _id: ID
        dutyName: String
        dutyValue: Float
        dutyDescription: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(firstName: String!, lastName: String!, email: String!): User
        dependents(dependentName: String!): [Dependent]
        dependent(_id: ID!): Dependent
        duties(dutyName: String): User
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        addDependent(dependentName: String!): Dependent
        addDuty(dutyName: String!, dutyValue: Float!, dutyDescription: String!): Duty
        updateDuty(_id: ID, dutyName: String!, dutyValue: Float!, dutyDescription: String!): Duty
        removeDuty(_id: ID!): Duty
    }
`;

module.exports = typeDefs;
