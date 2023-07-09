import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitForm } from "../../redux/actions";
const Detail = () => {
  const { name, email, fruit } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedFormValues = localStorage.getItem("formValues");
    if (storedFormValues) {
      const { name, email, fruit } = JSON.parse(storedFormValues);
      dispatch(submitForm(name, email, fruit));
    }
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <h1 className="text-center mt-5 fruit_detail">
              Welcome to Fruit Details
            </h1>
            <table className="table table-shadow">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Fruit:</td>
                  <td>{fruit}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
