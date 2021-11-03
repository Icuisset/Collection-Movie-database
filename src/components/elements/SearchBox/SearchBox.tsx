import React from 'react';

import './SearchBox.css';



function SearchBox(): JSX.Element {
    return (
        <form className='search'>
        <input
          className='search__input'
          type='text'
          placeholder='Enter topic'
        />
        <button className='search__button' type='submit'>
          Search
        </button>
    </form>
    )
  };

export default SearchBox;