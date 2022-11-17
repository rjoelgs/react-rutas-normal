import { FormikErrors, useFormik } from "formik";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = "required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must Be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "required";
    } else if (values.lastName.length > 10) {
      errors.firstName = "Must Be 10 characters or less";
    }

    if (!values.email) {
      errors.email = "required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik basic Tutorial</h1>

      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="firstName"
        />
        {formik.touched.firstName && formik.errors.firstName && <span>{formik.errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="lastName"
        />
         {formik.touched.lastName &&  formik.errors.lastName && <span>{formik.errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          name="email"
        />
         {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
