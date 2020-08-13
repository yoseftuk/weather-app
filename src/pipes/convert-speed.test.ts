import React from 'react';
import {KMPerHour} from "./convert-speed";

test('convert speed work properly', () => {
    expect(KMPerHour(0)).toEqual(0);
    expect(KMPerHour(1)).toEqual(4);
    expect(KMPerHour(10)).toEqual(36);
    expect(KMPerHour(1000)).toEqual(3600);
    expect(KMPerHour(-1000)).toEqual(-3600);
    expect(KMPerHour(-10)).toEqual(-36);
    expect(KMPerHour(-1)).toEqual(-4);
});
