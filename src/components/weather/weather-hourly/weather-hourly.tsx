import React, {useState} from 'react';
import {classes} from "../../../pipes/class";
import './weather-hourly.scss';
import HourlyWind from "./wind/hourly-wind";
import HourlyTemp from "./temp/hourly-temp";

enum Display {
    TEMPERATURE,
    WIND
}
export default function WeatherHourly() {
    const [display, setDisplay] = useState<Display>(Display.TEMPERATURE);
    return (
        <div id={'hourly'}>
            <div id={'hourly__actions'}>
                <button
                    className={classes({hourly__action: true, active: display === Display.WIND})}
                    onClick={() => setDisplay(Display.WIND)}
                >Wind</button>
                <button
                    className={classes({hourly__action: true, active: display === Display.TEMPERATURE})}
                    onClick={() => setDisplay(Display.TEMPERATURE)}
                >Temperature</button>
            </div>
            {display === Display.WIND? <HourlyWind/> : <HourlyTemp/>}
        </div>
    );
}
