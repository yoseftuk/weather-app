import React, {FunctionComponent, ReactNode} from 'react';
import CloudyIcon from "./cloudy";
import ThunderStormIcon from "./thunder-storm";
import RainyIcon from "./rainy";
import FlurriesIcon from "./flurries";
import SunnyIcon from "./sunny";

const icons: {[name:string]: FunctionComponent} = {
    Clouds: CloudyIcon,
    Thunderstorm: ThunderStormIcon,
    Drizzle: RainyIcon,
    Rain: RainyIcon,
    Snow: FlurriesIcon,
    Clear: SunnyIcon
};

type IconProps = {
    size: number;
    name: string;
}
export default function WeatherIcon({size, name}: IconProps) {
    const Icon: FunctionComponent =  icons[name] || null;
    return (
        <span style={{fontSize: `${size}em`}}>
            {React.createElement(Icon, null, null)}
        </span>);
}
