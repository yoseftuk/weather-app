import React from 'react';
import {takeSample} from "./take-sample";

test('takeSample should return the right value', () => {
    expect(takeSample([1,2,3,4,5], 1)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(takeSample([1,2,3,4,5], 2)).toStrictEqual([1, 3, 5]);
    expect(takeSample([1,2,3,4,5,6], 2)).toStrictEqual([1, 3, 5]);
    expect(takeSample([1,2,3,4,5,6], 3)).toStrictEqual([1, 4]);
    expect(takeSample([1,2,3,4,5,6], 1, 3)).toStrictEqual([1, 2, 3]);
    expect(takeSample([1,2,3,4,5,6], 3, 1)).toStrictEqual([1]);
});

