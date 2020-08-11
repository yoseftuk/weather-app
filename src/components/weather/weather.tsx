import React from 'react';
import './weather.scss';
import WeatherCurrent from "./weather-current/weather-current";
import WeatherHourly from "./weather-hourly/weather-hourly";
import WeatherDaily from "./weather-daily/weather-daily";
import {useSelector} from "react-redux";
import ApiStore from "../../types/api-store";
import Loader from "../loader/loader";

export default function Weather() {
    const isLoading = useSelector((state: ApiStore) => state.isLoading);
    const error = useSelector((state: ApiStore) => state.error);
    if(isLoading) {
        return (<Loader msg={'Looking outside for you... one sec'}/>)
    }
    if(error) {
        return (<Loader msg={'Some error occur... Please try again later'}/>)
    }
    return (
        <div id={'weather'}>
            <WeatherCurrent/>
            <WeatherHourly/>
            <WeatherDaily/>
        </div>
    );
}
