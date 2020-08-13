import React, {createElement} from 'react';
import { render } from '@testing-library/react';
import WeatherIcon from "./weather-icon";
import CloudyIcon from "./cloudy";
import SunnyIcon from "./sunny";

test('weather icon should return right icon', () => {
    const check = (name: string, expected: string) => {
        const icon = render(createElement(WeatherIcon, {size: 0, name}));
        expect(icon.container.getElementsByClassName(expected).length).toBeTruthy();
    };
    check('Clear', 'sunny');
    check('Clouds', 'cloudy');
    check('Thunderstorm', 'thunder-storm');
    check('Drizzle', 'rainy');
    check('Rain', 'rainy');
    check('Snow', 'flurries');

});
