import React from 'react';
import {displayTemp} from "./fahrenheit";

test('displayTemp return right fahrenheit value', () => {
    expect(displayTemp(0, true)).toEqual(41);
    expect(displayTemp(5/9, true)).toEqual(42);
    expect(displayTemp(1, true)).toEqual(43);
    expect(displayTemp(-5/9, true)).toEqual(40);
    expect(displayTemp(-1, true)).toEqual(39);
});

test('should return rounded celsius when flag set to false', () => {
    expect(displayTemp(0, false)).toEqual(0);
    expect(displayTemp(28, false)).toEqual(28);
    expect(displayTemp(28.3, false)).toEqual(28);
    expect(displayTemp(28.8, false)).toEqual(29);
    expect(displayTemp(28.5, false)).toEqual(29);
});
