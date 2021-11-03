import React from 'react';

import './SearchSection.css';

import SearchBox from '../../elements/SearchBox/SearchBox';

  
function SearchSection(): JSX.Element {
    return (
        <div className="searchSection">
            <h1 className='heading-zone__title'>What is your favourite movie?</h1>
            <SearchBox />
        </div>
    )
  };

export default SearchSection;