import React, { useState } from 'react';

import searchIcon from '../../icons/icon-search.svg';

function SearchInput({ searchArtist }) {
  const [inputValue, setInputValue] = useState('');

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      e.target.blur();
      e.preventDefault();
      searchArtist(inputValue);
    }
  }

  return (
    <div className='SearchInput'>
      <img alt='Search' src={searchIcon} />

      <input onChange={onChange} onKeyPress={onKeyPress} />
    </div>
  );
}

export default SearchInput;
