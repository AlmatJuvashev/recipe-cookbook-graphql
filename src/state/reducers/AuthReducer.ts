import { EMAIL_CHANGED, PASSWORD_CHANGED, GET_ID, GET_TOKEN } from './../actions/types';
import { ActionInterface } from './../actions/RecipeActions';
import React from 'react';
import PropTypes from 'prop-types';

interface State {
    email: string;
    password: string;
    userID: string;
    token: string;
}

const INITIAL_STATE = <State>{
    email: '',
    password: '',
    userId: '',
    token: ''
}

export const AuthReducer(state=INITIAL_STATE, action: ActionInterface) {
    switch(action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            }
        case PASSWORD_CHANGED: 
            return {
                ...state,
                password: action.payload
            }
        case GET_ID: 
            return {
                ...state,
                userId: action.payload
            }
        case GET_TOKEN: 
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}