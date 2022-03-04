import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchInput from '.';

test('components/SearchInput/', () => {
  const { container } = render(<SearchInput />);
  expect(container.firstChild).toMatchSnapshot();
});
