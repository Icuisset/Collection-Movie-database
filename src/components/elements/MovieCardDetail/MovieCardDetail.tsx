import React from 'react';
import { useParams } from 'react-router';
import initialCards from '../../../utils/initialCards';
import { Link } from 'react-router-dom';


import './MovieCardDetail.css';

 

function MovieCardDetail(): JSX.Element {

    let { id } = useParams<{id?: string}>();
   
    interface Card { 
        Title : string;
        Year : string;
        Type : string;
        Poster : string;
        imdbID : string;}

    const selectedCard : Card | undefined = initialCards.find((card)=>(card.imdbID===id));
    console.log(selectedCard);

    const selectedTitle = selectedCard ? selectedCard.Title : "No movie selected";
    const selectedType = selectedCard ? selectedCard.Type : "No movie selected";
    const selectedPlot = "There is no plot yet";
    const selectedPoster = selectedCard ? selectedCard.Poster : "No movie selected";
    const selectedRating = "8.5";

    return (
      <section className="movieCardDetailSection">
          <div className="movieCardDetail">
          <div className="movieCardDetail__image-box">
          <img className="movieCardDetail__image" src={selectedPoster} alt="movie poster"/>
          </div>
          <div className="movieCardDetail__right">
          <h2 className="movieCardDetail__title">{selectedTitle}</h2>
          <div className="movieCardDetail__title_underlined"></div>
          <p className="movieCardDetail__text">{selectedPlot}</p>
          <p className="movieCardDetail__type">{selectedType}</p>
          <p className="movieCardDetail__rating">{selectedRating}</p>
          <Link className="movieCardDetail__link" to='/'><button className='goback__button' type='button'>Go Back</button></Link>
          </div>
          </div>
          </section>
    )
  };

export default MovieCardDetail;