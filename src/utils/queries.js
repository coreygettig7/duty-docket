import { gql } from ('apollo-server-express');

export const QUERY_USER = gql`
    query user(firstName: $firstName, lastName: $lastName) {
        _id
        firstName
        lastName
        email
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

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            firstName
            lastName
            email
        }
    }
`;