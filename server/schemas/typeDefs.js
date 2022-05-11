// Import GQL tagged Template Function
const { gql } = require('apollo-server-express');

// Create typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        duties: [Duty]
    }
    type Duty {
        _id: ID
        dutyValue: Float
        dutyText: String
        dueDate: String

    }

    type Dependent {
        _id: ID
        dependentName: String
        duties: [Duty]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!, email: String!): User
        duties(username: String!): [Duty]
        duty(_id: ID!): Duty
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
        addDependent(dependentName: String!): Dependent
        addDuty(dutyName: String!, dutyValue: Float!, dutyDescription: String!, dueDate: String!): Duty
        updateDuty(_id: ID, dutyName: String!, dutyValue: Float!, dutyDescription: String!, dueDate: String!): Duty
        removeDuty(_id: ID!): Duty
    }
`;

module.exports = typeDefs;
