import ApiStore from "../types/api-store";
import {Action, SET_CITY, SET_DATA, SET_ERROR, SET_FAHRENHEIT, START_LOADING, STOP_LOADING} from "./actions";
import {cities} from "../components/map/cities.data";

const initialState: ApiStore = {
    isLoading: false,
    error: null,
    data: null,
    currentCity: cities[0],
    isFahrenheit: false
};
export default function apiReducer(state: ApiStore = initialState, action: Action) {
    switch (action.type) {
        case START_LOADING:
            console.log('staring..');
            return {
                ...state,
                isLoading: true
            };
        case STOP_LOADING:
            console.log('stopping..');
            return {
                ...state,
                isLoading: false
            };
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SET_CITY:
            return {
                ...state,
                currentCity: action.payload
            };
        case SET_FAHRENHEIT:
            return {
                ...state,
                isFahrenheit: action.payload
            };
        default:
            return state;
    }
}
