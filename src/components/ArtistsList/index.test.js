import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ArtistsList from '.';

test('components/ArtistsList/', () => {
  const data = [
    {
      artist: {
        id: 1,
        name: 'Damso'
      }
    }
  ]

  const { container } = render(
    <BrowserRouter>
      <ArtistsList data={data} />
    </BrowserRouter>
  );
  expect(container.firstChild).toMatchSnapshot();
})