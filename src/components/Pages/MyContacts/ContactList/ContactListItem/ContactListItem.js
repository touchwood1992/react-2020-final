import React, { useContext, useState } from "react";
import { FaTrash, FaPencilAlt, FaStar } from "react-icons/fa";
import ContactContext from "../../../../../contexts/Contacts/contactContext";
import Loading from "../../../../Common/Loading/Loading";
const ContactListItem = ({ item, id }) => {
  const [state, setstate] = useState("");
  const contactContext = useContext(ContactContext);
  const removeContactHandlerer = () => {
    contactContext.removeContact(id);
    setstate("delete");
  };

  const editHandler = () => {
    contactContext.setupdateuser({ ...item, id });
  };

  const setStar = () => {
    contactContext.updateDstar(id, {
      ...item,
      star: item.star ? false : true,
    });
  };
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center">
          <FaTrash
            onClick={removeContactHandlerer}
            style={{ cursor: "pointer" }}
          />
          {state === "delete" ? <Loading></Loading> : ""}
          <FaPencilAlt
            style={{ cursor: "pointer" }}
            className="ml-2"
            onClick={editHandler}
          ></FaPencilAlt>
          {state === "edit" ? <Loading></Loading> : ""}

          <FaStar
            onClick={setStar}
            style={
              item.star
                ? { cursor: "pointer", color: "#00ffff" }
                : { cursor: "pointer" }
            }
            className="ml-2"
          ></FaStar>
        </div>
      </td>
    </tr>
  );
};
export default ContactListItem;
