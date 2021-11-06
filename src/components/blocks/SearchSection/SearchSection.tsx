import React from 'react';

import './SearchSection.css';

import SearchBox from '../../elements/SearchBox/SearchBox';

interface SearchProps{
    onSearch: (word:string) => void
}
  
function SearchSection({onSearch}:SearchProps): JSX.Element {
    return (
        <div className="searchSection">
            <h1 className='heading-zone__title'>What is your favourite movie?</h1>
            <SearchBox onSearch={onSearch} />
        </div>
    )
  };

export default SearchSection;