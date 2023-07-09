import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../redux/actions";
import store from "../../redux/store";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (selectedOption) {
      console.log("Submitting form", values);
      const { name, email } = values;
      const fruit = selectedOption.value;
      dispatch(submitForm(name, email, fruit));
      localStorage.setItem(
        "formValues",
        JSON.stringify({ name, email, fruit })
      );
      const url = `/detail`;
      navigate(url);
    } else {
      console.log("Please select a fruit");
    }
    setSubmitting(false);
  };

  return (
    <section>
      <div className="container">
        <h1 className="text-center mt-5 fruit_detail">
          Fruit Details Dashboard
        </h1>
        <div className="row mt-5">
          <div className="col-lg-8 m-auto">
            <div className="form-container">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, isSubmitting, isValid }) => (
                  <Form>
                    <div className="col-md-12 mt-5 form-group">
                      <label className="edit_font">
                        Name <span className="required">*</span>
                      </label>
                      <Field
                        name="name"
                        value={values.name}
                        as="input"
                        className="form-control"
                        maxLength={75}
                      />
                      {errors.name && touched.name && (
                        <p className="equal_answer error">{errors.name}</p>
                      )}
                    </div>
                    <div className="col-md-12 mt-5 form-group">
                      <label className="edit_font">
                        Email <span className="required">*</span>
                      </label>
                      <Field
                        name="email"
                        value={values.email}
                        as="input"
                        className="form-control"
                        maxLength={75}
                      />
                      {errors.email && touched.email && (
                        <p className="equal_answer error">{errors.email}</p>
                      )}
                    </div>
                    <div className="col-md-12 mt-5 form-group">
                      <div className="dropdown-container">
                        <Select
                          name="fruit"
                          options={options}
                          onChange={handleSelectChange}
                          placeholder="Select a fruit"
                          value={selectedOption}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bnt_submit"
                      disabled={!isValid || isSubmitting || !selectedOption}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
