import React from 'react';
import HourData from "../../../../types/hour-data";
import {useSelector} from "react-redux";
import ApiStore from "../../../../types/api-store";
import {takeSample} from "../../../../pipes/take-sample";
import {KMPerHour} from "../../../../pipes/convert-speed";
import {formatHour} from "../../../../pipes/format-hour";
import HourlyWindItem from "./hourly-wind-item";

export default function HourlyWind() {
    const data: HourData[] | null = useSelector((state: ApiStore) => state.data && state.data.hourly);
    if(!data) return null;
    return (
        <div id={'hourly__wind'}>
            {
                takeSample<HourData>(data, 3, 8).map((t, i) => (
                    <HourlyWindItem data={t}/>
                ))
            }
        </div>
    );
}
