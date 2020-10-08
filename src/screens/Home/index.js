import React, { useState } from 'react';

import API from '../../API';
import { authorizeAuthURL } from '../../API/config';

import ArtistsList from '../../components/ArtistsList';
import Button from '../../components/Button';
import Input from '../../components/Input';

import searchIcon from '../../icons/icon-search.svg';

function Home({ token }) {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  async function onSubmit() {
    const searchResults = await API.routes.search(token, inputValue, 'artist');
    setData(searchResults);

    console.log(searchResults);
  }

  return (
    <div className='Home'>
      {!token && (
        <Button onClick={() => (window.location.href = authorizeAuthURL)}>
          LOG IN
        </Button>
      )}
      {token && (
        <div className='Home__search'>
          <div className='Home__search__header'>
            <Input
              onChange={onChange}
              placeholder='Try "Damso"'
              value={inputValue}
            />
            <Button onClick={onSubmit} color='green' type='square'>
              <img alt='Search' src={searchIcon} />
            </Button>
          </div>

          <ArtistsList data={data} />
        </div>
      )}
    </div>
  );
}

export default Home;
