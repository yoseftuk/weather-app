import React from 'react';
import {israelTime} from "./israel-time";

test('israel time should return in right format', () => {
    const {getDay, getHours, getMinutes} = Date.prototype;
    const setPrototype = (day: number, hour: number, minute: number) => {
        Date.prototype.getDay = () => day;
        Date.prototype.getHours = () => hour;
        Date.prototype.getMinutes = () => minute;
    };
    const check = (input: number, output: string) => expect(israelTime(input)).toEqual(output);
    setPrototype(2, 3, 7);
    check(0, 'Tuesday, 03:07');
    setPrototype(0, 23, 0);
    check(0, 'Sunday, 23:00');
    setPrototype(0, 0, 24);
    check(0, 'Sunday, 00:24');
    Date.prototype.getDay = getDay;
    Date.prototype.getHours = getHours;
    Date.prototype.getMinutes = getMinutes;
});
test('israel time should return in right timezone', () => {
    const toDate = (dateString: string): Date => new Date('01-01-2020'+dateString.replace(/^[^,]+,/, ''));
    const check = (timezoneOffset: number, expected: number) => (
        expect(toDate(israelTime(timezoneOffset)).getTime() - toDate(israelTime(0)).getTime())
            .toEqual(expected * 60 * 60 * 1000));
    check(10800, 3);
    check(3600, 1);
    check(7200, 2);
});
