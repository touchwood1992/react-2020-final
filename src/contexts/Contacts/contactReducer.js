import {
  SET_LOADING,
  ALL_CONTACTS,
  SET_ERROR,
  SET_MSGS,
  SET_UPDATE_USER,
  UPDATE_USER,
  REMOVE_USER,
  RESET_MSGS,
} from "./Types";
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload, error: null, showMsg: null };
    case ALL_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        editContact: false,
        error: null,
        updateUser: null,
        showMsg: null,
      };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_MSGS:
      return { ...state, showMsg: action.payload, loading: false };
    case REMOVE_USER:
      return {
        ...state,
        loading: false,
        editContact: false,
        error: null,
        updateUser: null,
        showMsg: action.payload,
      };
    case SET_UPDATE_USER:
      return { ...state, updateUser: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        editContact: false,
        updateUser: null,
        showMsg: action.payload,
        error: null,
      };
    case RESET_MSGS:
      return { ...state, showMsg: null };
    default:
      return state;
  }
};
