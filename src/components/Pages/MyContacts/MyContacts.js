import React, { useContext, useEffect } from "react";
import AuthContext from "../../../contexts/Auth/AuthContext";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { toast } from "react-toastify";
import ContactContext from "../../../contexts/Contacts/contactContext";

const MyContacts = (props) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  //Checking user logged in
  useEffect(() => {
    if (!authContext.user && authContext.websiteloading === false) {
      props.history.push("/");
    }
  }, [authContext.user, authContext.websiteloading, props.history]);

  //MSGS for error
  useEffect(() => {
    if (contactContext.error) {
      toast.error(contactContext.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [contactContext.error]);

  //MSGS for successMsg
  useEffect(() => {
    if (contactContext.showMsg) {
      toast.success(contactContext.showMsg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [contactContext.showMsg]);

  useEffect(() => {
    //Fetching all Contacts from firebase
    contactContext.allContacts();
  }, []);
  return (
    <div className="container mt-3">
      <h2 className="heading">Your All Contacts</h2>
      <ContactForm loading={contactContext.loading}></ContactForm>
      <ContactList
        loading={contactContext.loading}
        contacts={contactContext.contacts}
      ></ContactList>
    </div>
  );
};
export default MyContacts;
