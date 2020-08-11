export const REQUEST_DATA = 'request data';
export const START_LOADING = 'start loading';
export const STOP_LOADING = 'stop loading';
export const SET_ERROR = 'set error';
export const SET_DATA = 'set data';
export const SET_CITY = 'set city';
export const SET_FAHRENHEIT = 'set fahrenheit';

export interface Action {
    type: string;
    payload?: any;
}
