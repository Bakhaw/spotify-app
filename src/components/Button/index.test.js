import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '.';

test('components/Button/', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
})