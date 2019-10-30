import { cleanup, render } from '@testing-library/react';
import React from 'react';
import AppHooks from './AppHooks';

afterEach(cleanup);

describe('App', () => {
  it('renders default data', () => {
    const { getByText } = render(<AppHooks />);
    getByText('Website')
    getByText('for');
    getByText('Thing');
    getByText('Try Again');
  });
});
