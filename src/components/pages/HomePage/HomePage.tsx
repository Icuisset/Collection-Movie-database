import React from 'react';
import { useEffect, useState } from 'react';
import KeywordContext from '../../../context/KeywordContext';

import './HomePage.css';


import SearchSection from '../../blocks/SearchSection/SearchSection';
import ResultsSection from '../../blocks/ResultsSection/ResultsSection';
import NoResultsSection from '../../blocks/NoResultsSection/NoResultsSection';
import Pagination from '../../elements/Pagination/Pagination';
import moviesApi from '../../../utils/moviesApi';
import initialCards from '../../../utils/initialCards';


  
function HomePage(): JSX.Element {

  const [cards, setCards] = useState([]);
  const [keyword,setKeyword] = useState("sun");
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalResults, settotalResults] =useState(0);
  const [noResultMessage, setNoResultMessage]=useState("");
  const [isError, setIsError]=useState(false);

  useEffect(() => {
      moviesApi
        .getMoviesResultsbyPage(keyword, selectedPage.toString())
        .then((result) => {
          console.log(result);
          const response:string = result.Response;
          if (response ==="True") {
            setCards(Array.from(result.Search));
            settotalResults(Number(result.totalResults));
            setIsError(false);
          } else {
            setNoResultMessage(result.Error);
            setIsError(true);
          };
          console.log(result);
          console.log(result.totalResults);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  , [keyword, selectedPage]);


    return (
      <>
        <SearchSection />
        <NoResultsSection message={noResultMessage} error={isError} />
        <ResultsSection movieCards={cards}/>
        <KeywordContext.Provider value={keyword}>
        <Pagination totalMovies={totalResults} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </KeywordContext.Provider>
        </>
    )
  };

export default HomePage;