import React from 'react';
import MapSvg from "./map-svg";
import {cities} from './cities.data';
import Pin from "./pin";
import './map.scss';

export default function Map() {
    return (
        <div id={'map'}>
            <div id={'map__wrapper'}>
                <MapSvg/>
                {cities.map(city => (
                    <Pin key={city.name} city={city}/>
                ))}
            </div>
        </div>
    )
}
