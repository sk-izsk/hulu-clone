import { render } from '@testing-library/react';
import React from 'react';
import { Fa500Px } from 'react-icons/fa';
import { AppProvider } from '../../AppProvider';
import { IconText } from './IconText';

const mockData = {
  text: 'mock text',
  Icon: Fa500Px,
};
test('IconText renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <IconText {...mockData} />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
