import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { Nav } from './Nav';

test('Nav renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <Nav />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
