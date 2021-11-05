import React from 'react';

import './ResultsSection.css';

import initialCards from '../../../utils/initialCards';
import MovieCard from '../../elements/MovieCard/MovieCard';

function ResultsSection(): JSX.Element {
    return (
        <section className="resultsSection">
            <ul className='resultsCards'>
            {initialCards.map((card, index) => (
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