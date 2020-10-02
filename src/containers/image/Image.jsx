import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../redux/actions";

import { Buttonback } from "../../components/common/buttons/button_back/ButtonBack";
import Layout from "../../components/common/layout";

import "./Image.scss";

const Image = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImage(id));
  }, []);

  const imageSelector = useSelector((state) => state.image);
  const imageSelected = imageSelector.image;

  return (
    <>
      {imageSelected && (
        <Layout>
          <div className="imageWrapper">
            <img
              key={imageSelected.id}
              src={imageSelected.images.original.url}
              alt={imageSelected.title}
            />
            <div className="description">
              <h3>{imageSelected.title}</h3>
            </div>
          </div>
          <Buttonback />
        </Layout>
      )}
    </>
  );
};

export default withRouter(Image);
