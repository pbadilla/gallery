import { combineReducers } from "redux";
import images from "./ImagesReducer";
import image from "./ImageReducer";

const rootReducer = combineReducers({
  images,
  image,
});

export default rootReducer;
