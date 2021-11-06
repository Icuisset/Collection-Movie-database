import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';

import KeywordContext from '../../../context/KeywordContext';

import './Pagination.css';
import moviesApi from '../../../utils/moviesApi';

interface PaginationProps{
    totalMovies: number;
    selectedPage:number;
    setSelectedPage: (page:number) => void
}

function Pagination({totalMovies, selectedPage, setSelectedPage}:PaginationProps) {
  
    const pageTotal: number = (totalMovies%10 !==0)?(totalMovies/10):((totalMovies/10)+1);
    const pageNumberList = [];
    for(let i = 1; i < pageTotal; i++){ // generates the pages numbers
        pageNumberList.push(i)    
    }
    
    return (
        <div>
            <button onClick={() =>setSelectedPage(1)} >First</button>
            {pageNumberList.map(pageNr => {
                return <button onClick={() => setSelectedPage(pageNr)}>{pageNr}</button>
            })}
            <button onClick={() =>setSelectedPage(pageTotal)} >Last</button>
        </div>
    )}

export default Pagination;

