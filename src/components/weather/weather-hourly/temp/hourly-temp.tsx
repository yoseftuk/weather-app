import React, {useEffect, useRef} from 'react';
import HourData from "../../../../types/hour-data";
import {useSelector} from "react-redux";
import ApiStore from "../../../../types/api-store";
import {useWindowResize} from "../../../../hooks/resize.hook";
import {takeSample} from "../../../../pipes/take-sample";
import HourlyWindItem from "../wind/hourly-wind-item";
import {formatHour} from "../../../../pipes/format-hour";
import {displayTemp} from "../../../../pipes/fahrenheit";

export default function HourlyTemp() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const data: HourData[] | null = useSelector((state: ApiStore) => state.data && state.data.hourly);
    const isFahrenheit = useSelector((state: ApiStore) => state.isFahrenheit);
    const wSize = useWindowResize();
    useEffect(() => {
        if (!canvas || !canvas.current) return;
        if (!data) return;
        const wd = data.slice(24);
        const cv = canvas.current;
        const ctx = cv.getContext('2d') as CanvasRenderingContext2D;
        cv.width = cv.offsetWidth;
        cv.height = cv.offsetHeight;
        let min = Infinity, max = -Infinity;
        for (let d of wd) {
            if (d.temp > max) max = d.temp;
            if (d.temp < min) min = d.temp;
        }
        max *= 1.1;
        const interval = cv.width / 23;
        const pd = 20;
        const getX = (i: number) => i * interval;
        const getY = (t: HourData) => (cv.height-pd) - (t.temp - min) * (cv.height-pd) / (max - min);
        const color = '#FEBC39';
        ctx.fillStyle = color+'4a';
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.clearRect(0, 0, cv.width, cv.height);
        // fill
        ctx.beginPath();
        ctx.moveTo(0, cv.height);
        ctx.lineTo(0, getY(wd[0]));
        for (let [i, d] of wd.entries()) {
            ctx.lineTo(getX(i), getY(d));
        }
        ctx.lineTo(cv.width, cv.height);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        // stroke
        ctx.moveTo(0, getY(wd[0]));
        for (let [i, d] of wd.entries()) {
            ctx.lineTo(getX(i), getY(d));
        }
        ctx.stroke();
        ctx.closePath();
        //texts
        ctx.beginPath();
        ctx.fillStyle = color;
        for (let [i, d] of takeSample(wd.slice(1), 2, 11).entries()) {
            ctx.fillText(String(displayTemp(d.temp, isFahrenheit)), getX(i*2 + 1), getY(d) - 3);
        }
        ctx.closePath();
    }, [data, wSize, isFahrenheit]);
    if(!data) return null;
    return (
        <div id={'hourly__temp'}>
            <canvas id={'hourly__temp__cv'} ref={canvas}/>
            <div id={'hourly__temp__hours'}>
                {
                    takeSample<HourData>(data, 3, 9).map((t, i) => (
                        <span key={t.dt} className={'hourly__temp__hour'}>{formatHour(t.dt)}</span>
                    ))
                }
            </div>
        </div>
    );
}
