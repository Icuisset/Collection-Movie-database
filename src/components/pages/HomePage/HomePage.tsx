import React from 'react';

import './HomePage.css';

import SearchSection from '../../blocks/SearchSection/SearchSection';
import ResultsSection from '../../blocks/ResultsSection/ResultsSection';


  
function HomePage(): JSX.Element {
    return (
      <>
        <SearchSection />
        <ResultsSection />
        </>
    )
  };

export default HomePage;