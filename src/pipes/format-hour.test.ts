import React from 'react';
import {formatHour} from "./format-hour";

test('should format hour correctly', () => {
    const date = new Date(2020, 1, 1, 4, 0, 8);
    const check = (val: string) => expect(formatHour(date.getTime() / 1000)).toEqual(val);
    check('04:00');
    date.setMinutes(40);
    check('05:00');
    date.setHours(12);
    check('13:00');
    date.setMinutes(0);
    check('12:00');
});
