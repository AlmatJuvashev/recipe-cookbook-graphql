import { EMAIL_CHANGED, PASSWORD_CHANGED, GET_ID } from './types';


export interface ActionInterface {
    readonly type: 'string';
    payload?: any;
}

export const emailChanged<ActionInteface> = (email: string)  => {
    type: EMAIL_CHANGED,
    payload: email
}

export const passwordChanged<ActionInterface> = (password: string) => {
    type: PASSWORD_CHANGED,
    payload: password
}

export const getUserId<ActionInterface> = (userId: string) => {
    type: GET_ID,
    payload: userId
}

export const getToken<ActionInterface> = (token: string) => {
    type: GET_ID,
    payload: token
}