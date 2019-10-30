import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import ThisForThat, {getRandomValue} from './ThisForThat';

afterEach(cleanup);

describe('getRandomValue', () => {
  it('returns single value', () => {
    expect(getRandomValue(['value'])).toBe('value');
  });

  it('returns random value', () => {
    const values = ['a', 'b', 'd', 'e'];
    const value = getRandomValue(values)
    expect(values.includes(value)).toBe(true);
  });
});

describe('ThisForThat', () => {
  it('renders singular data', () => {
    const { getByText } = render(<ThisForThat sites={['YouTube']} things={['Vegans']} />);
    getByText('YouTube')
    getByText('for');
    getByText('Vegans');
    
    const button = getByText('Try Again');
    fireEvent.click(button);

    getByText('YouTube')
    getByText('for');
    getByText('Vegans');
  });
});
