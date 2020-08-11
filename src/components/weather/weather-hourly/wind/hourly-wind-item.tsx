import React from 'react';
import HourData from "../../../../types/hour-data";
import {KMPerHour} from "../../../../pipes/convert-speed";
import {formatHour} from "../../../../pipes/format-hour";
import Arrow from "./arrow";
import {getScale} from "../../../../pipes/get-scale";

export default function HourlyWindItem({data}: { data: HourData }) {
    return (
        <div className={'hourly__wind__item'}>
            <div className={'hourly__wind__item__val'}>{KMPerHour(data.wind_speed)}<span className={'hourly__wind__item__unit'}>&nbsp;</span>km/h</div>
            <div className={'hourly__wind__item__arrow'}>
                <Arrow width={1.5} rotation={data.wind_deg} color={'#1b75bc'} scale={getScale(data.wind_speed)}/>
            </div>
            <div className={'hourly__wind__item__hour'}>{formatHour(data.dt)}</div>
        </div>
    )
}
