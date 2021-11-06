import React from 'react';

import './Pagination.css';

interface PaginationProps{
    totalMovies: number;
    selectedPage:number;
    setSelectedPage: (page:number) => void
}

function Pagination({totalMovies, selectedPage, setSelectedPage}:PaginationProps) {
  
    const pageTotal: number = Math.ceil(totalMovies/10);
    const newPageTotal: number = Math.min(10, pageTotal);
    const pageNumberList = [];
    for(let i = 1; i < newPageTotal; i++){ // generates the pages numbers
        pageNumberList.push(i)    
    }

    
    return (
        <div className="pagination-zone">
            <div>
            <button className="pagination-button" data-testid="btn-first" onClick={() =>setSelectedPage(1)} >First</button>
            {pageNumberList.map(pageNr => {
                return <button className="pagination-button" onClick={() => setSelectedPage(pageNr)}>{pageNr}</button>
            })}
            <button className="pagination-button" onClick={() =>setSelectedPage(pageTotal)} >Last</button>
            </div>
            <div className="pagination-bottom">
            <label htmlFor="pagenb">Enter a page number between 2 and {pageTotal}</label>
            <input className="pagination-button pagination-input" type="number" id="pagenb" name="pagenb" min="1" max={pageTotal} onChange={(e)=>setSelectedPage(Number(e.target.value))}></input>
            </div>
            </div>
    )}

export default Pagination;

