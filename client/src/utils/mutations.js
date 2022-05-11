import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;

export const ADD_DUTY = gql`
    mutation addDuty($dutyText: String!, $dutyDistinction: String!, $dueDate: String!, $dutyDeposit: String!) {
        addDuty(dutyText: $dutyText, dutyDistinction: $dutyDistinction, dueDate: $dueDate, dutyDeposit: $dutyDeposit) {
            _id
            dutyText
            dutyDistinction
            dueDate
            dutyDeposit
            createdAt
        }
    }
`;

export const ADD_DOER = gql`
    mutation addDoer($name: String!) {
        addDoer(name: $name) {
            _id
            name
        }
    }
`;