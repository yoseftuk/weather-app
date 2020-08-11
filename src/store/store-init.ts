import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import apiReducer from './api-reducer';
import {sagaWatcher} from "./api-saga";

const saga = createSagaMiddleware();
const store = createStore(
    apiReducer,
    applyMiddleware(saga)
);
saga.run(sagaWatcher);
export default store;
