import { render } from '@testing-library/react';
import React from 'react';
import Index from '../pages/Index';

describe('Index', () => {
  it('renders', () => {
    render(<Index />);
  });
});
