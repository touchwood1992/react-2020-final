import {
  SET_LOADING,
  SET_CONTACT,
  SET_SEARCH_VALUE,
  UNSET_LOADING,
} from "./Types";
export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        serchValue: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CONTACT:
      return {
        ...state,
        ...action.payload,
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};
