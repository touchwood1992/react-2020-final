import { SIGNIN, SIGNUP, SIGNOUT, GETUSER, SIGNUPONLOAD } from "./Types";
export default (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        websiteloading: false,
      };

    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        websiteloading: false,
      };

    case SIGNUPONLOAD:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        websiteloading: false,
      };

    case SIGNOUT:
      return { ...state, user: null, loggedIn: false, websiteloading: false };

    case GETUSER:
      break;

    default:
      return state;
  }
};
