import { gql } from ('apollo-server-express');

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            tokem
            user {
                _id
                firstName
                lastName
            }
        }
    }
`;

export const ADD_DEPENDENT = gql`
    mutation addDependent($firstName: String!, $lastName: String) {
        addDependent(firstName: $firstName, lastName: $lastName) {
            _id
            firstName
            lastName
            dutyCount
            duties {
                _id
            }
        }
    }
`;

export const ADD_DUTY = gql`
    mutation addDuty($dutyName: String!, $dutyValue: FLoat!, $dutyDescription: String!) {
        addDuty(dutyName: $dutyName, dutyValue: $dutyValue, dutyDescription: $dutyDescription) {
            _id
            dutyName
            dutyValue
            dutyDescription
            user {
                _id
            }
        }
    }
`;

export const UPDATE_DUTY = qgl`
    mutation updateDuty{
        $id: ID
        dutyName: $dutyName
        dutyValue: $dutyValue
        dutyDescription: $dutyDescription
        user {
            _id
        }
    }
`;

export const REMOVE_DUTY = qgl`
    mutation removeDuty($id: ID! {
        removeDuty(_id: $_id) {
            _id
        }
    }
`;