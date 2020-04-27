import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../../../contexts/Contacts/contactContext";
import Loading from "../../../Common/Loading/Loading";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  //Form State
  const [state, setState] = useState({ name: "", email: "", phone: "" });
  const { name, email, phone } = state;
  const setFormValueHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //On form submit call context and save IT.....
  const saveContact = async (e) => {
    e.preventDefault();
    try {
      //Check add oR update
      if (contactContext.updateUser) {
        //Update
        await contactContext.updateContact(state);
      } else {
        //Add
        await contactContext.saveContact(state);
      }
      setState({ name: "", email: "", phone: "" });
    } catch (error) {
      console.log("formError", error);
    }
  };

  useEffect(() => {
    if (contactContext.updateUser) {
      setState(contactContext.updateUser);
    } else {
      setState({ name: "", email: "", phone: "" });
    }
  }, [contactContext.updateUser]);
  return (
    <form action="" autoComplete="false" onSubmit={saveContact}>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={setFormValueHandler}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={setFormValueHandler}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Phone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={phone}
          onChange={setFormValueHandler}
          required
        />
      </div>
      <button className="btn btn-dark">
        {contactContext.updateUser ? "Update Contact" : "Add New Contact"}
      </button>
      {contactContext.loading?.type === "AddContact" ? <Loading></Loading> : ""}
    </form>
  );
};

export default ContactForm;
