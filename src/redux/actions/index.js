import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGE_BEGIN,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
} from "../actions/action-types";

export function getImages() {
  return (dispatch) => {
    return fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=75htWLrq0ebXnN7oSpV23LFIYfR14Tch&q=barcelona&limit=25&offset=0&rating=g&lang=en`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dispatch(fetchImagesSuccess(data));
      })
      .catch(function (err) {
        dispatch(fetchImagesFailure(err));
        console.error(err);
      });
  };
}
export function getImage(id) {
  return (dispatch) => {
    return fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=75htWLrq0ebXnN7oSpV23LFIYfR14Tch`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dispatch(fetchImageSuccess(data));
      })
      .catch(function (err) {
        dispatch(fetchImageFailure(err));
        console.error(err);
      });
  };
}

export const fetchImagesBegin = () => ({
  type: FETCH_IMAGES_BEGIN,
});

export const fetchImagesSuccess = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: { images },
});

export const fetchImagesFailure = (error) => ({
  type: FETCH_IMAGES_FAILURE,
  payload: { error },
});

export const fetchImageBegin = () => ({
  type: FETCH_IMAGE_BEGIN,
});

export const fetchImageSuccess = (image, kind) => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: { image },
});

export const fetchImageFailure = (error) => ({
  type: FETCH_IMAGE_FAILURE,
  payload: { error },
});
