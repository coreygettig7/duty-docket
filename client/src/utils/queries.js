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