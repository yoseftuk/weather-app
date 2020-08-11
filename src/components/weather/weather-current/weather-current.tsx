import React, {useState} from 'react';
import './weather-current.scss'
import {israelTime} from "../../../pipes/israel-time";
import {useDispatch, useSelector} from 'react-redux';
import ApiStore from "../../../types/api-store";
import CurrentData from "../../../types/current-data";
import WeatherIcon from "../../icons/weather-icon";
import ICity from "../../../types/city";
import {displayTemp} from "../../../pipes/fahrenheit";
import {KMPerHour} from "../../../pipes/convert-speed";
import {classes} from "../../../pipes/class";
import {SET_FAHRENHEIT} from "../../../store/actions";
import Sync from "./sync";
import MobileSelect from "./mobile-select/mobile-select";

export default function WeatherCurrent() {
    const timezoneOffset = useSelector((state: ApiStore) => state.data && state.data.timezone_offset);
    const data: CurrentData | null = useSelector((state: ApiStore) => state.data && state.data.current);
    const city: ICity = useSelector((state: ApiStore) => state.currentCity);
    const isFahrenheit: boolean = useSelector((state: ApiStore) => state.isFahrenheit);
    const dispatch = useDispatch();
    if (!data) return null;
    return (
        <div>
            <div id={'general'}>
                <span id={'general__sync'}>
                <Sync/>
                </span>
                <h1 id={'general__city'}>{city.name}</h1>
                <MobileSelect/>
                <h2 id={'general__time'}>{israelTime(timezoneOffset || 0)}</h2>
                <h2 id={'general__weather'}>{data.weather[0].description}</h2>
            </div>
            <div id={'current'}>
                <div id={'current__main'}>
                    <WeatherIcon size={.75} name={data.weather[0].main}/>
                    <span id={'current__temp'}>{displayTemp(data.temp, isFahrenheit)}</span>
                    <span id={'current__units'}>
                        <span className={classes({current__unit: true, active: !isFahrenheit})}
                              onClick={() => dispatch({type: SET_FAHRENHEIT, payload: false})}>°C</span>
                        &nbsp;|&nbsp;
                        <span className={classes({current__unit: true, active: isFahrenheit})}
                              onClick={() => dispatch({type: SET_FAHRENHEIT, payload: true})}>°F</span>
                    </span>
                </div>
                <div id={'current__sec'}>
                    <div>Feels like: {displayTemp(data.feels_like, isFahrenheit)}°</div>
                    <div>Humidity: {data.humidity}%</div>
                    <div>Wind: {KMPerHour(data.wind_speed)} km/h</div>
                </div>
            </div>
        </div>
    );
}
