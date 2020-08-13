import React from 'react';
import {classes} from "./class";

test('classes return the right value', () => {
    expect(classes({a: true, b: false, c: true})).toEqual('a c');
    expect(classes({a: 1, b: 0, c: 'sdf'})).toEqual('a c');
    expect(classes({a: null, b: false, c: true})).toEqual('c');
});
