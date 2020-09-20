import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { Results } from './Results';

test('Results renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <Results selectedOption='trending' />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
