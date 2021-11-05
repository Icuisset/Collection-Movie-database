import React from 'react';
import { useParams } from 'react-router';
import initialCards from '../../../utils/initialCards';


import './MovieCardDetail.css';

 

function MovieCardDetail(): JSX.Element {

    let { id } = useParams<{id?: string}>();
   
    interface Card { 
        Title : string;
        Year : string;
        Genre : string;
        Plot : string;
        Poster : string;
        imdbRating : string;
        imdbID : string;}

    const selectedCard : Card | undefined = initialCards.find((card)=>(card.imdbID===id));
    console.log(selectedCard);

    const selectedTitle = selectedCard ? selectedCard.Title : "No movie selected";
    const selectedGenre = selectedCard ? selectedCard.Genre : "No movie selected";
    const selectedPlot = selectedCard ? selectedCard.Plot : "No movie selected";
    const selectedPoster = selectedCard ? selectedCard.Poster : "No movie selected";
    const selectedRating = selectedCard ? selectedCard.imdbRating : "No movie selected";

    return (
      <section className="movieCardDetailSection">
          <div>
          <img className="movieCard__image" src={selectedPoster} alt="movie poster"/>
          </div>
          <div className="movieCard__right">
          <h2 className="movieCard__title">{selectedTitle}</h2>
          <div className="movieCard__title_underlined"></div>
          <p className="movieCard__text">{selectedPlot}</p>
          <p className="movieCard__genre">{selectedGenre}</p>
          <p className="movieCard__genre">{selectedRating}</p>
          </div>
          </section>
    )
  };

export default MovieCardDetail;