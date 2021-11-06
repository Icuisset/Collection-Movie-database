import React from 'react';
import { useEffect, useState } from 'react';

import './HomePage.css';

import SearchSection from '../../blocks/SearchSection/SearchSection';
import ResultsSection from '../../blocks/ResultsSection/ResultsSection';
import NoResultsSection from '../../blocks/NoResultsSection/NoResultsSection';
import moviesApi from '../../../utils/moviesApi';
import initialCards from '../../../utils/initialCards';


  
function HomePage(): JSX.Element {

  const [cards, setCards] = useState([]);
  const [keyword,setKeyword] = useState("sun");
  const [totalResults, settotalResults] =useState(0);
  const [noResultMessage, setNoResultMessage]=useState("");
  const [isError, setIsError]=useState(false);

  useEffect(() => {
      moviesApi
        .getMoviesResults(keyword)
        .then((result) => {
          console.log(result);
          const response:string = result.Response;
          if (response ==="True") {
            setCards(Array.from(result.Search));
            settotalResults(result.totalResults);
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
  , [keyword]);

    return (
      <>
        <SearchSection />
        <NoResultsSection message={noResultMessage} error={isError} />
        <ResultsSection movieCards={cards}/>
        
        </>
    )
  };

export default HomePage;