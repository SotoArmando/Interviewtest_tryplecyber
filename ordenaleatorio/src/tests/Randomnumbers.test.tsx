import React from 'react';
import { render, screen } from '@testing-library/react';
import Randomnumbers from '../Brain'
import test100  from './test100'

test('Return 10 different arrays using 5 numbers', () => {
  let arrays = [];
  for (let i = 1; i <= 10; i ++) {
    arrays.push(Randomnumbers(5))
  }
  expect(arrays.some(array => arrays.every(e => array.includes(e)))).toBeFalsy()
});

test('Return 25 different arrays using 10 numbers', () => {
  let arrays = [];
  for (let i = 1; i <= 25; i ++) {
    arrays.push(Randomnumbers(5))
  }
  expect(arrays.some(array => arrays.every(e => array.includes(e)))).toBeFalsy()
});