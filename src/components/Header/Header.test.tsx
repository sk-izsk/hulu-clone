import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { Header } from './Header';

test('Header renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <Header />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
