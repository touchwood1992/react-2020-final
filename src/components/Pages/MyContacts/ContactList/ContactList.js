import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";
import Loading from "../../../Common/Loading/Loading";
const ContactList = (props) => {
  return (
    <table className="table table-dark table-striped mt-3">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts === null ? (
          <tr>
            <td colSpan="4">
              {props.loading?.type === "AllContacts" ? (
                <Loading />
              ) : (
                "No contact Found."
              )}
            </td>
          </tr>
        ) : (
          <>
            {Object.entries(props.contacts).map(([key, val]) => (
              <ContactListItem key={key} id={key} item={val}></ContactListItem>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};
export default ContactList;
