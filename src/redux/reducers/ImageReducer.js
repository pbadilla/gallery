import {
  FETCH_IMAGE_BEGIN,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
} from "../actions/action-types";

const initialState = {
  image: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        loading: false,
        image: payload.image.data,
      };
    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        image: {},
      };
    default:
      return state;
  }
}
