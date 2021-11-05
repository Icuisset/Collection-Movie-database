import React from 'react';
import { useEffect, useState } from 'react';

import './HomePage.css';

import SearchSection from '../../blocks/SearchSection/SearchSection';
import ResultsSection from '../../blocks/ResultsSection/ResultsSection';
import moviesApi from '../../../utils/moviesApi';
import initialCards from '../../../utils/initialCards';


  
function HomePage(): JSX.Element {

  const [cards, setCards] = useState([]);
  const [keyword,setKeyword] = useState("night");
  const [noResults, setNoResults]=useState("");

  useEffect(() => {
      moviesApi
        .getMoviesResults(keyword)
        .then((result) => {
          console.log(result);
          const response:string = result.Response;
          if (response ==="True") {setCards(Array.from(result.Search))} else {setNoResults(result.Error)};
          console.log(Array.from(result.Search));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  , [keyword]);

    return (
      <>
        <SearchSection />
        <ResultsSection movieCards={cards}/>
        </>
    )
  };

export default HomePage;