import { gql } from '@apollo/client';

export const QUERY_DUTIES = gql`
    query duties($username: String) {
        duties(username: $username) {
            _id
            dutyText
            username
            dueDate
            dependent {
                _id
                dependentName
            }
        }
    }
`;


/*export const QUERY_USER = gql`
    query user(firstName: $firstName, lastName: $lastName) {
        _id
        firstName
        lastName
        email
        dependents {
            _id
            firstName
            lastName
        }
        duties {
            dutyName
            dutyValue
            dutyDescription
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            firstName
            lastName
            email
        }
    }
`;

export const QUERY_DUTIES = gql`
   {
       dutyName
       dutyValue
       dutyText
   }
`;
*/