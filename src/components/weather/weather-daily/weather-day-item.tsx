import React from 'react';
import DayData from "../../../types/day-data";
import WeatherIcon from "../../icons/weather-icon";
import {useSelector} from "react-redux";
import ApiStore from "../../../types/api-store";
import {displayTemp} from "../../../pipes/fahrenheit";

export default function WeatherDayItem({data}: { data: DayData }) {
    const date = new Date(data.dt * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[date.getDay()];
    const isFahrenheit = useSelector((state: ApiStore) => state.isFahrenheit);
    return (
        <div className={'daily-item'}>
            <div className={'daily-item__day'}>{day}</div>
            <div className={'daily-item__icon'}>
                <WeatherIcon size={.25} name={data.weather[0].main}/>
            </div>
            <div className={'daily-item__temps'}>
                <span className={'daily-item__temp max'}>{displayTemp(data.temp.max, isFahrenheit)}°</span>
                <span className={'daily-item__temp min'}>{displayTemp(data.temp.min, isFahrenheit)}°</span>
            </div>
        </div>
    );
}
