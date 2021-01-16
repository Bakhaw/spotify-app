import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Avatar from '.';

test('components/Avatar/', () => {
  const artist = {
    image: 'damso.jpg',
  };

  const { container } = render(<Avatar artist={artist} />);
  expect(container.firstChild).toMatchSnapshot();
})