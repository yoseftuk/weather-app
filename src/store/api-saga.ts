import {takeLatest, put, call} from 'redux-saga/effects';
import {Action, REQUEST_DATA, SET_CITY, SET_DATA, SET_ERROR, START_LOADING, STOP_LOADING} from "./actions";
import ICity from "../types/city";

const API_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const API_KEY = '13f5562a858fe9b1e41317e0cca9c042';
const getUrl = (city: ICity) => `${API_URL}?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&exclude=minutely&units=metric`;

export function* sagaWatcher() {
    yield takeLatest(REQUEST_DATA, sagaWorker);
}

function* sagaWorker(action: Action) {
    const city = action.payload;
    localStorage.setItem('city', JSON.stringify(city));
    console.log(`fetching for ${city.name}`);
    yield put({type: START_LOADING});
    yield put({type: SET_CITY, payload: city});
    try {
        const data = yield call(() => fetchWeather(action.payload));
        yield put({type: STOP_LOADING});
        yield put({type: SET_ERROR, payload: null});
        yield put({type: SET_DATA, payload: data});
    } catch (e) {
        yield put({type: STOP_LOADING});
        yield put({type: SET_ERROR, payload: "some error occur"});
    }
}

async function fetchWeather(city: ICity) {
    const res = await fetch(getUrl(city));
    return res.json();
}
