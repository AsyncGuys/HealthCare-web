import React from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Required";
    }
    if (!values.email) {
      errors.email = "*Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    }
    if (!values.message) {
      errors.message = "*Required";
    }
    return errors;
  };
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validate,
      onSubmit: (values, { resetForm }) => {
        emailjs
          .send(
            "service_a7240lo",
            "template_yb68dcr",
            values,
            "1FWlcCgquT-k1U4Bp"
          )
          .then(
            (result) => {
              alert("Your message has been Sent Successfully. !");
              resetForm();
            },
            (error) => {
              alert(error.text);
            }
          );
      },
    });
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full mt-32" onSubmit={handleSubmit}>
        <h1 className="text-blue-500 text-4xl font-extrabold mb-5 text-center">Contact Us</h1>
        <form className="flex flex-col ">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="mb-3 w-[350px] outline-none border-2 border-b-black p-2 rounded-xl"
          />
          {touched.name && errors.name ? (
            <div className="text-red-300">{errors.name}</div>
          ) : null}
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="mb-3 w-[350px] outline-none border-2 border-b-black p-2 rounded-xl"
          />
          {touched.email && errors.email ? (
            <div className="text-red-300">{errors.email}</div>
          ) : null}
          <textarea
            className="mb-3  w-[350px] outline-none border-2 border-b-black p-2 rounded-xl"
            placeholder="Your Message"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          ></textarea>
          {touched.message && errors.message ? (
            <div className="text-red-300">{errors.message}</div>
          ) : null}
          <br></br>
          <button className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;