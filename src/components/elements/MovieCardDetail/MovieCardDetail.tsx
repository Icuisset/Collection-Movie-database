import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import './MovieCardDetail.css';
import moviesApi from '../../../utils/moviesApi';

 

function MovieCardDetail(): JSX.Element {

    let { id } = useParams<{id: string}>();

    const [selectedMovie, setSelectedMovie] = useState({
      title:"Sorry, there is no film with this ID",
      year:"",
      type:"",
      poster:"https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=8",
      plot:"Please search for another film",
      rating:""
    });

    useEffect(() => {
      moviesApi
        .getResultbyId(id)
        .then((result) => {
          console.log(result);
          if (result.Response === "True") {
          setSelectedMovie({
            title:result.Title,
            year:result.Year,
            type:result.Genre,
            poster:result.Poster,
            plot:result.Plot,
            rating:result.imdbRating
          });}
        })
        .catch((err) => {
          console.log(err);
        });
    }
  , [id]);
   
    return (
      <section className="movieCardDetailSection">
          <div className="movieCardDetail">
          <div className="movieCardDetail__image-box">
          <img className="movieCardDetail__image" src={selectedMovie.poster} alt="movie poster"/>
          </div>
          <div className="movieCardDetail__right">
          <h2 className="movieCardDetail__title">{selectedMovie.title}</h2>
          <div className="movieCardDetail__title_underlined"></div>
          <p className="movieCard__year">{selectedMovie.year}</p>
          <p className="movieCardDetail__text">{selectedMovie.plot}</p>
          <p className="movieCardDetail__type">{selectedMovie.type}</p>
          { selectedMovie.rating?
          (<p className="movieCardDetail__rating">rating: {selectedMovie.rating}</p>): null}
          <Link className="movieCardDetail__link" to='/'><button className='goback__button' type='button'>Go Back</button></Link>
          </div>
          </div>
          </section>
    )
  };

export default MovieCardDetail;