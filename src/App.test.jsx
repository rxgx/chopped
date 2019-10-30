import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('renders default data', () => {
    const { getByText } = render(<App />);
    getByText('Website')
    getByText('for');
    getByText('Thing');
    getByText('Try Again');
  });
});
