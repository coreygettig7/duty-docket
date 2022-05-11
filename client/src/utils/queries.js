import { gql } from '@apollo/client';


export const QUERY_DUTIES  = gql`
query queryAllDuties ($username: String) {
  duties (username: $username){
    _id
    username
    dutyText
    dutyDeposit
    createdAt
    dueDate
    dutyDistinction
    dutyDoer{
      _id
      name
    }
  }
}
`;

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
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      duties {
        _id
        dutyText
        dutyDisctinction
        dueDate
        dutyDeposit
        createdAt
      }
    }
    dutyDoer {
      _id
      username
    }
  }
`;