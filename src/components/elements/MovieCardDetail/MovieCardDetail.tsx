import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import initialCards from '../../../utils/initialCards';
import { Link } from 'react-router-dom';


import './MovieCardDetail.css';
import moviesApi from '../../../utils/moviesApi';

 

function MovieCardDetail(): JSX.Element {

    let { id } = useParams<{id: string}>();

    const [selectedMovie, setSelectedMovie] = useState("tt0076759");

    useEffect(() => {
      moviesApi
        .getResultbyId(id)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  , [id]);
   
    interface Card { 
        Title : string;
        Year : string;
        Type : string;
        Poster : string;
        imdbID : string;}


    const selectedTitle = "No movie selected";
    const selectedType = "No movie selected";
    const selectedPlot="There is no plot yet";
    const selectedPoster="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80";
    const selectedRating ="8.5";

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