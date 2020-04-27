import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
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
import firebase from "../../Config/FirebaseAuth";
import { v4 as uuidv4 } from "uuid";
const ContactState = (props) => {
  const defaultState = {
    loading: false,
    contacts: null,
    showMsg: null,
    error: null,
    updateUser: null,
  };
  const [state, dispatch] = useReducer(contactReducer, defaultState);

  const allContacts = async () => {
    dispatch({ type: SET_LOADING, payload: { type: "AllContacts" } });

    try {
      var userId = firebase.auth().currentUser.uid;
      var allContacts = firebase.database().ref("contacts/" + userId);
      allContacts.on("value", function (snapshot) {
        dispatch({ type: ALL_CONTACTS, payload: snapshot.val() });
      });
      dispatch({ type: RESET_MSGS });
    } catch (error) {
      console.log("All Contacts Error: ", error.response);
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: RESET_MSGS });
    }
  };

  const saveContact = async (contact) => {
    dispatch({ type: SET_LOADING, payload: { type: "AddContact" } });

    try {
      var userId = firebase.auth().currentUser.uid;
      const ref = firebase
        .database()
        .ref("contacts/" + userId + "/" + uuidv4());

      await ref.set(contact);
      dispatch({ type: SET_MSGS, payload: "Contact Added Successfully." });
      dispatch({ type: RESET_MSGS });
    } catch (error) {
      console.log("Save Contact Error: ", error.response);
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: RESET_MSGS });
      throw error;
    }
  };
  const removeContact = async (id) => {
    try {
      dispatch({ type: SET_LOADING, payload: { type: "RemoveContact" } });

      var userId = firebase.auth().currentUser.uid;
      await firebase
        .database()
        .ref("contacts/" + userId + "/" + id)
        .remove();

      dispatch({
        type: REMOVE_USER,
        payload: "Contact Removed Successfully.",
      });
      dispatch({ type: RESET_MSGS });
    } catch (error) {
      console.log("Remove Contact Error: ", error.response);
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: RESET_MSGS });
    }
  };

  const setupdateuser = (payload) => {
    dispatch({ type: SET_UPDATE_USER, payload });
  };
  const updateContact = async (payload) => {
    try {
      var userId = firebase.auth().currentUser.uid;
      const id = payload.id;
      const copyPayload = { ...payload };
      delete copyPayload.id;

      await firebase
        .database()
        .ref()
        .update({
          ["contacts/" + userId + "/" + id]: copyPayload,
        });
      dispatch({ type: UPDATE_USER, payload: "Contact Updated Successfully." });
      dispatch({ type: RESET_MSGS });
    } catch (error) {
      console.log("Remove Contact Error: ", error.response);
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: RESET_MSGS });
      throw error;
    }
  };

  const updateDstar = async (id, newVal) => {
    try {
      var userId = firebase.auth().currentUser.uid;
      await firebase
        .database()
        .ref()
        .update({
          ["contacts/" + userId + "/" + id]: newVal,
        });
      dispatch({ type: UPDATE_USER, payload: "Star Updated Successfully." });
      dispatch({ type: RESET_MSGS });
    } catch (error) {
      console.log("Remove Contact Error: ", error.response);
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: RESET_MSGS });
      throw error;
    }
  };

  return (
    <ContactContext.Provider
      value={{
        loading: state.loading,
        contacts: state.contacts,
        showMsg: state.showMsg,
        error: state.error,
        updateUser: state.updateUser,
        allContacts,
        saveContact,
        removeContact,
        setupdateuser,
        updateContact,
        updateDstar,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
