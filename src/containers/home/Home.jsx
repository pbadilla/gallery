import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/actions";

import Layout from "../../components/common/layout";
import Loading from "../../components/loading";
import LazyImage from "../../components/lazyImage";

import "./home.scss";

const Home = (props) => {
  const imagesPerPage = 20;
  let arrayImages = [];

  const [imagesToShow, setImagesToShow] = useState([]);
  const [nextPage, setNextPage] = useState(20);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, []);

  const arrayImagesSlice = (start, end, images) => {
    const slicedImages = images.slice(start, end);
    arrayImages = [...arrayImages, ...slicedImages];
    return arrayImages;
  };

  const handleShowMoreImages = () => {
    arrayImagesSlice(nextPage, nextPage + imagesPerPage);
    setNextPage(nextPage + imagesPerPage);
  };

  const imagesList = useSelector((state) => state.images.listImages[0]);
  const imagesLoop =
    imagesList === "undefined" || imagesList ? imagesList.data : "";
  const imagesShown = arrayImagesSlice(0, imagesPerPage, imagesLoop);

  return (
    <div>
      <Layout>
        <div id="main" className="main-container gallery">
          {imagesList ? (
            <div className="inner">
              <div className="columns">
                {imagesLoop &&
                  imagesLoop.map((image, index) => (
                    <div className="image fit" key={image.id}>
                      <Link
                        to={`/photo/${image.id}`}
                        key={image.id}
                        title={image.title}
                        data-alt="img03"
                        data-description={`<h3>${image.title}</h3>`}
                      >
                        <img
                          key={image.id}
                          src={image.images.original.url}
                          alt={image.title}
                        />

                        <div className="description">
                          <h3>{image.title}</h3>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
              <button onClick={handleShowMoreImages}>Load more Images</button>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
