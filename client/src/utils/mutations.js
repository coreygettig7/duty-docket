import { gql } from '@apollo/client';

// query to login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// query to create an account
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        username
        email
      }
    
    }
  }
`;

// query to add a dutyDoer 😂
export const ADD_DOER = gql `
  mutation addDoer($dutyId: ID!, $name: String!) {
    addDoer(dutyId: $dutyId, name: $name) {
      _id
      dutyText
      createdAt
      dueDate
      dutyDeposit
      dutyDistinction
      dutyDoer {
        _id
        name
      }
    }
  }
`;

// query to add a duty
export const ADD_DUTY = gql `
mutation addDuty($dutyText: String!, $dutyDistinction: String!, $dueDate: String!, $dutyDeposit: String ) {
  addDuty(dutyText: $dutyText, dutyDistinction: $dutyDistinction, dueDate: $dueDate, dutyDeposit: $dutyDeposit){
    dutyText
    dueDate
    dutyDistinction
    dutyDeposit
  }
}
`;

// query to update a duty
export const UPDATE_DUTY = gql `
mutation updateDuty($dutyId: ID!, $dutyText: String, $dutyDistinction: String, $dueDate: String, $dutyDeposit: String) {
  updateDuty(dutyId: $dutyId, dutyText: $dutyText, dutyDistinction: $dutyDistinction, dueDate: $dueDate, dutyDeposit: $dutyDeposit) {
    _id
    dutyText
    dutyDistinction
    dutyDeposit
  }
}
`;

// query to delete a duty
export const DELETE_DUTY = gql`
mutation removeDuty($dutyId: ID!) {
  removeDuty(dutyId: $dutyId) {
    _id
    dutyText
  }
}
`;