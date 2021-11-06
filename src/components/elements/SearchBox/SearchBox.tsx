import React from 'react';
import { useState } from 'react';

import './SearchBox.css';

interface SearchBoxProps{
  onSearch: (word:string) => void
}


function SearchBox({onSearch}:SearchBoxProps): JSX.Element {

  const [searchText, setSearchText] = useState("");

  const handleSubmit =() => {
    onSearch(searchText);
  }

    return (
        <div className='search'>
        <input
          className='search__input'
          type='text'
          placeholder='Enter topic'
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
        <button className='search__button' type='button' onClick={handleSubmit}>
          Search
        </button>
    </div>
    )
  };

export default SearchBox;