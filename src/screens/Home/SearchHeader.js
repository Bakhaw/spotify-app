import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import searchIcon from '../../icons/icon-search.svg';

function SearchHeader({ searchArtist }) {
  const [inputValue, setInputValue] = useState('');

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function onSubmit() {
    searchArtist(inputValue);
  }

  return (
    <div className='Home__search__header'>
      <Input
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder='Try "Damso"'
        value={inputValue}
      />
      <Button onClick={onSubmit} color='green' type='square'>
        <img alt='Search' src={searchIcon} />
      </Button>
    </div>
  );
}

export default SearchHeader;
