import { applyMiddleware, combineReducers, createStore } from "redux";
import { FilmReducer } from "../redux/reducers/FilmReducer";

import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  FilmReducer,
  //chứa các state của ứng dụng
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
