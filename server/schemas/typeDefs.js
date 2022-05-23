const { gql } = require('apollo-server-express');
// cannot get dutyDoers to display properly
const typeDefs = gql`
  type Duty {
    _id: ID
    username: String
    dutyText: String
    dutyDeposit: String
    createdAt: String
    dueDate: String
    dutyDistinction: String
    dutyDoer: [Doer]
  }

  type Doer {
    _id: ID
    name: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    duties: [Duty]
  }
  type Auth { 
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    duties(username: String): [Duty]
    duty(_id: ID!): Duty
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addDuty(dutyText: String!, dutyDistinction: String!, dueDate: String!, dutyDeposit: String): Duty
    addDoer(dutyId: ID!, name: String!): Duty
    updateDuty(dutyId: ID!, dutyText: String, dutyDistinction: String, dueDate: String, dutyDeposit: String): Duty
    removeDuty(dutyId: ID!): Duty
  }
`;
module.exports = typeDefs;