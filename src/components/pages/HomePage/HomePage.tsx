import React from 'react';
import { useEffect, useState, useCallback, useReducer } from 'react';

import './HomePage.css';


import SearchSection from '../../blocks/SearchSection/SearchSection';
import ResultsSection from '../../blocks/ResultsSection/ResultsSection';
import NoResultsSection from '../../blocks/NoResultsSection/NoResultsSection';
import Pagination from '../../elements/Pagination/Pagination';
import moviesApi from '../../../utils/moviesApi';
import reducer from '../../../reducer/reducer';
import {ActionType, State, Action} from '../../../reducer/reducer';


  
function HomePage(): JSX.Element {

  const initialCardState: State = {
    cards: [],
    totalResults: 0,
}
  const [cardState, dispatch] = useReducer(reducer, initialCardState)

  const [cards, setCards] = useState([]);
  const [keyword,setKeyword] = useState("sun");
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalResults, settotalResults] =useState(0);
  const [noResultMessage, setNoResultMessage]=useState("");
  const [isError, setIsError]=useState(false);

  useEffect(() => {
      moviesApi
        .getMoviesResultsbyPage(
         keyword, selectedPage.toString())
        .then((result) => {
          console.log(result);
          const response:string = result.Response;
          if (response ==="True") {
            setCards(Array.from(result.Search));
            dispatch({type:ActionType.SET_SEARCHRESULTS,payload:result.Search});
            settotalResults(Number(result.totalResults));
            dispatch({type:ActionType.SET_TOTALRESULTS,payload:result.totalResults});
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
  , [selectedPage]);


  const handleMovieSearch = useCallback( (searchKeyword: string) => {
    if ( searchKeyword !== "") {
    setKeyword(searchKeyword);
    moviesApi
      .getMoviesResults(searchKeyword)
      .then((result) => {
        console.log(result);
        const response:string = result.Response;
        if (response ==="True") {
          setCards(Array.from(result.Search));
          dispatch({type:ActionType.SET_SEARCHRESULTS,payload:result.Search});
          settotalResults(Number(result.totalResults));
          dispatch({type:ActionType.SET_TOTALRESULTS,payload:result.totalResults});
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
  }, []);




    return (
      <>
        <SearchSection onSearch={handleMovieSearch}/>
        <NoResultsSection message={noResultMessage} error={isError} />
        <ResultsSection movieCards={cardState.cards}/>
        <Pagination totalMovies={cardState.totalResults} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </>
    )
  };

export default HomePage;