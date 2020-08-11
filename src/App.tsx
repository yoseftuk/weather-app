import React from 'react';
import './App.scss';
import Map from "./components/map/map";
import SunShowerIcon from "./components/icons/sun-shower";
import PartiallyCloudyIcon from "./components/icons/partly-cloudy";
import CloudyIcon from "./components/icons/cloudy";
import Weather from "./components/weather/weather";
import Loader from "./components/loader/loader";
import {useDispatch} from "react-redux";
import {REQUEST_DATA} from "./store/actions";
import {cities} from "./components/map/cities.data";

function App() {
    const dispatch = useDispatch();
    dispatch({type: REQUEST_DATA, payload: cities[0]});
    return (
        <main id={'main-cont'}>
            <Map/>
            {/*<Loader/>*/}
            <Weather/>
        </main>
    );
}

export default App;
