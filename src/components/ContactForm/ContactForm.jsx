import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = yup.object().shape({
  name: yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  number: yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});


const ContactForm = ({ addContacts }) => {
  const handleSubmit = (data, formActions) => {
    addContacts(data);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

