import React from 'react';
import DayData from "../../../types/day-data";
import {useSelector} from "react-redux";
import ApiStore from "../../../types/api-store";
import WeatherDayItem from "./weather-day-item";
import './weather-daily.scss';

export default function WeatherDaily() {
    const data: DayData[] | null = useSelector((state: ApiStore) => state.data && state.data.daily);
    if (!data) return null;
    return (
        <div id={'daily'}>
            {data.map(t => (<WeatherDayItem key={t.dt} data={t}/>))}
        </div>
    );
}
