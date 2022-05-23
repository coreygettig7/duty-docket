import { gql } from '@apollo/client';

<<<<<<< HEAD
export const QUERY_ME = gql`
  { 
    me {
      _id
      username
      email
      duties {
        _id
        dutyText
        createdAt
        dueDate
        dutyDistinction
        dutyDeposit
      }
    }
  }
`;
=======

>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816

export const QUERY_ME_DUTIES = gql`
  {
    me {
      _id
      username
      duties {
        _id
        dutyText
        createdAt
        dueDate
        dutyDistinction
        dutyDeposit
        dutyDoer {
          _id
          name
        }
      }
    }
  }
`

export const QUERY_DUTY = gql`
  query duty($id: ID!) {
    duty(_id: $id) {
      _id
      username
      dutyText
      dutyDeposit
      createdAt
      dueDate
      dutyDistinction
      dutyDoer {
        _id
        name
      }
    }
  }
`
<<<<<<< HEAD
=======

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      duties {
        _id
        dutyText
        createdAt
        dueDate
        dutyDistinction
        dutyDeposit
        dutyDoer {
          _id
          name
        }
      }
    }
  }
`;
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
