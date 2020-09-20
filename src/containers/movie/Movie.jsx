import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMovie, putMovieWishList } from "../../redux/actions";

import { Buttonback } from "../../components/common/buttons/button_back/ButtonBack";
import Image from "../../components/common/image";
import Layout from "../../components/common/layout";

import favourites from "../../../public/images/favourites.svg";
import "./movie.scss";

const Movie = ({ match }) => {
  const id = match.params.id;
  const kind = match.params.kindMovie;

  const dispatch = useDispatch();

  const movieSelector = useSelector((state) => state.movie);
  const movieSelected = movieSelector.movie;

  useEffect(() => {
    kind ? dispatch(getMovie(id, kind)) : null;
  }, []);

  function addWishList(movieName) {
    dispatch(putMovieWishList(movieName));
  }

  const kindMovie = useSelector((state) => state.movie.kind);

  return (
    <>
      {movieSelected && (
        <Layout>
          <Buttonback />
          <div className="movieWrapper">
            <section className="imageMovie ">
              <figure className="addWishlist">
                <Image
                  src={`http://image.tmdb.org/t/p/original${movieSelected.backdrop_path}`}
                />
                <figcaption>
                  <h2>Add to my Wishlist</h2>
                  <a
                    href="#"
                    onClick={addWishList(movieSelected.original_title)}
                  ></a>
                </figcaption>
              </figure>
              <a href="#" onClick={addWishList(movieSelected.original_title)}>
                Add to my wishlist
              </a>
            </section>
            <section className={`descriptionMovie movie-${kind}`}>
              <ul>
                <li>
                  <h3>{movieSelected.original_title}</h3>
                </li>
                <li>{movieSelected.overview}</li>
                <li>{movieSelected.popularity}</li>
                <li className="tagsMovie">{movieSelected.genres[0].name}</li>
              </ul>
            </section>
            <section className={`infoMovie movie-${kind}`}>
              <ul>
                <li>
                  Production company:{" "}
                  {movieSelected.production_companies[0].name}
                </li>
                <li>
                  <p>
                    Country:{" "}
                    {movieSelected.production_companies[0].origin_country}
                  </p>
                </li>
                <li>
                  <a href={movieSelected.homepage}>Movie's original link</a>
                </li>
              </ul>
            </section>
          </div>
        </Layout>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createSession: (session) => dispatch(createSession(session)),
});

export default withRouter(Movie);
