import React from 'react';
import './App.scss';
import Map from "./components/map/map";
import Weather from "./components/weather/weather";
import {useDispatch} from "react-redux";
import {REQUEST_DATA} from "./store/actions";
import {cities} from "./components/map/cities.data";

function App() {
    const dispatch = useDispatch();
    const savedCity = localStorage.getItem('city');
    const city = savedCity ? JSON.parse(savedCity) : cities[0];
    dispatch({type: REQUEST_DATA, payload: city});
    return (
        <main id={'main-cont'}>
            <Map/>
            <Weather/>
        </main>
    );
}

export default App;
