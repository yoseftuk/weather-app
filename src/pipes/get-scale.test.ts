import React from 'react';
import {getScale} from "./get-scale";

test('should scale with max of 1 for 5.5 and min of 3/8.5', () => {
    expect(getScale(5.5)).toEqual(1);
    expect(getScale(1000)).toEqual(1);
    expect(getScale(5.49)).toBeLessThan(1);
    expect(getScale(0)).toEqual(3/8.5);
    expect(getScale(0.01)).toBeGreaterThan(3/8.5);
});
