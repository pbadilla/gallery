import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./LazyImage.scss";

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <div className="imageWrapper">
      <div className="placeholder" ref={refPlaceholder} />
      <LazyLoadImage
        alt={alt}
        className="styledImage"
        effect="blur"
        src={src}
        threshold="100"
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequLazyLoadImageired,
};

export default LazyImage;
