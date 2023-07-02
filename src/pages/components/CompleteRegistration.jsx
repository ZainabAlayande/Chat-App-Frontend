import { React, useState } from "react";
import "../styles/CompleteRegistration.css";
import { useFormik } from "formik";
import { GoogleLogin } from "react-google-login";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Picture from "../../assets/images/converseSix.jpg";


const clientId =
  "255159867530-ki9qm6gcrdiqep63mv57i995h50echpa.apps.googleusercontent.com";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    },

    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },

    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "  *Required";
      }

      if (!values.password) {
        errors.password = "  *Required";
      }

      if (!values.password) {
        errors.confirmPassword = "  *Required";
      } else if (values.confirmPassword != values.password) {
        errors.confirmPassword = "  Password does not match";
      }

      if (!values.gender) {
        errors.gender = "  *Required";
      }


      return errors;
    },
  });

  console.log("Visited Fields: ", formik.touched);

  const onSuccess = (response) => {
    console.log("SIGN UP SUCCESS! Current user: ", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("SIGN UP FAILED! response: ", response);
  };

  return (
    <div className="background">

<div className="upperContainer">
            <div className="logoText">
                <div>
                <img src={Picture} alt="Not found" className="converseLogo"></img>
                </div>
               
               <div>
               <h1 className="name">CONVERSE</h1>
               </div>
            </div>

            <div className='homeLink'>
                  <a href='http://localhost:3001/'>Home</a>
                </div>
        </div>

        <div className="completeRegistration">
          <h2 className="">Complete your Registration</h2>
          <p>
            Already have an account? <a href="http://localhost:3001/login">Log In</a>
          </p>
        </div>

        <div className="innerFormDiv">
          <br></br><br></br>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex">

                <div>
                  {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="text"
                placeholder="username"
                className="input"
                value={formik.values.username}
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
            <div>
              <div className="flex">

                <div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="password"
                placeholder="password"
                className="input"
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <div className="flex">

                <div>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="error">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="text"
                placeholder="confirm password"
                className="input"
                value={formik.values.confirmPassword}
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            <br></br>

            <div>
              <input type="submit" value="Submit" className="submitButton" />
              <br />
              <br />
            </div>
            {/* <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Continue with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className="googleButton"
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </div> */}
          </form>
        </div>

    </div>
  );
};

export default Register;

