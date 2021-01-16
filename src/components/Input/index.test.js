import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Input from '.';

test('components/Input/', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
})