import React from 'react';
import {Link} from 'react-router-dom';

import './MovieCard.css';

function MovieCard(props: any): JSX.Element {
    return (
      <div className="movieCard">
          <div className="movieCard__image-box">
          <img className="movieCard__image" src={props.card.Poster} alt="movie poster"/>
          </div>
          <div className="movieCard__right">
          <h2 className="movieCard__title">{props.card.Title}</h2>
          <div className="movieCard__title_underlined"></div>
          <p className="movieCard__year">{props.card.Year}</p>
          <p className="movieCard__type">{props.card.Type}</p>
          <Link to={`/detail/${props.card.imdbID}`} className="movieCard__link">View More...</Link>
          </div>
      </div>
    )
  };

export default MovieCard;