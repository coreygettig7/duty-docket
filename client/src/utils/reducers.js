import { useReducer } from 'React';

import {
    ADD_DUTY,
    UPDATE_DUTY,
    REMOVE_DUTY,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

        case ADD_DUTY:
            return {
                ...state,
                duties: [...action.duties]
            };
        
        case UPDATE_DUTY:
            return {
                ...state,
                duties: action.duties
            };

        case REMOVE_DUTY:
            let newState = state.duty.filter(duty => {
                return duty._id !== action.id;
            });

            return {
                ...state,
                duty: newState
            };

        default:
            return state;
    }
};

export function useDutyReducer(initialState) {
    return useReducer(reducer, initialState);
}