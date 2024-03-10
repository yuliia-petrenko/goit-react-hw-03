import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const Contact = ({ data: { name, number, id }, deleteContact }) => {
  return (
    <div className={css.contactList}>
      <div className={css.contactInfo}>
        <p>
          <IoPersonSharp className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => deleteContact(id)}>
        Delete <GoTrash/>
      </button>
    </div>
  );
};

export default Contact;