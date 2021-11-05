import React from 'react';

import './ResultsSection.css';

import initialCards from '../../../utils/initialCards';
import MovieCard from '../../elements/MovieCard/MovieCard';

interface movieCard { 
        Title : string;
        Year : string;
        Type : string;
        Poster : string;
        imdbID : string;}


function ResultsSection<cardResults>({movieCards}:{movieCards: movieCard[]}): JSX.Element {

    return (
        <section className="resultsSection">
            <ul className='resultsCards'>
            {movieCards.map((card, index) => (
              <MovieCard
                key={index}
                card={card}
              />
            ))}
          </ul>
        </section>
    )
  };

export default ResultsSection;