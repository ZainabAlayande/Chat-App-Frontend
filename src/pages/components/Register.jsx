import { React, useState } from "react";
import "../styles/Register.css";
import { useFormik } from "formik";
import { GoogleLogin } from "react-google-login";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Picture from '../../assets/images/chat 1.jpg'
import PictureTwo from '../../assets/images/chat 2.jpg'



const clientId = "255159867530-ki9qm6gcrdiqep63mv57i995h50echpa.apps.googleusercontent.com";

const Register = () => {
  const formik = useFormik({
    initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        country: ""
    },

    onSubmit: values => {
        console.log("Form Values: ", values)
    },

    validate: values => {
        let errors = {}

        if(!values.fullName) {
            errors.fullName = "  *Required"
        }

        if(!values.email) {
            errors.email = "  *Required"
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "  Invalid email format"
        }

        if(!values.password) {
            errors.password = "  *Required"
        }

        if(!values.password) {
            errors.confirmPassword = "  *Required"
        } else if(values.confirmPassword != values.password) {
            errors.confirmPassword = "  Password does not match"
        }

        if(!values.gender) {
            errors.gender = "  *Required"
        }

        if(!values.country) {
            errors.country = "  *Required"
        }

        return errors
    }

  })

  console.log("Visited Fields: ", formik.touched)

  const onSuccess = (response) => {
    console.log("SIGN UP SUCCESS! Current user: ", response.profileObj)
  }

  const onFailure = (response) => {
    console.log("SIGN UP FAILED! response: ", response)
  }

  

  return (
    <div className="background">
      <div className="formContainer">
        <div className="register">
          <h2 className="registerText">Register</h2>
          <p>
            Already have an account? <a href="">Log In</a>
          </p>
         
        </div>

        <div className="innerFormContainer">
          <form onSubmit={formik.handleSubmit}>
            <div>
             <div className="flex"> 
                <div>
                <label htmlFor="">Full Name</label>
                </div>

                <div>
                {formik.touched.fullName && formik.errors.fullName ? (<div className="error">{formik.errors.fullName}</div>) : null}
                </div>             
             </div>
              
              <input
                type="text"
                placeholder=""
                className="input"
                value={formik.values.fullName}
                name="fullName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
             <div className="flex">
                <div>
                <label htmlFor="nameInput">Email Address</label>
                </div>

                <div>
              {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
                </div>

             </div>
             
              <input
                type="email"
                placeholder=""
                className="input"
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
             <div className="flex">
                <div>
                <label htmlFor="nameInput">Password</label>
                </div>

                <div>
              {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password}</div>) : null}
                </div>

             </div>
              
              <input
                type="password"
                placeholder=""
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
                <label htmlFor="nameInput">Confirm Password  </label>
                </div>

                <div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className="error">{formik.errors.confirmPassword}</div>) : null}
                </div>

             </div>
              
              <input
                type="text"
                placeholder=""
                className="input"
                value={formik.values.confirmPassword}
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
             <div className="flex">
                <div>
                <label>Select your Gender</label>
                </div>

                <div>
                  {formik.touched.gender && formik.errors.gender ? (<div className="error">{formik.errors.gender}</div>) : null}
                </div>

             </div>
              
              <div className="genderContainer">
                <div className="radio">
                  <input
                    type="radio"
                    className="inputRadio"
                    name="gender"
                    value="male"
                    checked={formik.values.gender == "male"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="radiolabel" className="radioLabel">
                    Male
                  </label>
                </div>

                <div className="radio">
                  <input
                    type="radio"
                    className="inputRadio"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="radioLabel" className="radioLabel">
                    Female
                  </label>
                </div>

                <div className="radio">
                  <input
                    type="radio"
                    className="inputRadio"
                    name="gender"
                    value="others"
                    checked={formik.values.gender === "others"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="radioLabel" className="radioLabel">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div>
             <div className="flex">
                <div>
                <label htmlFor="nameInput">Country</label>
                </div>

                <div>
              { formik.touched.country && formik.errors.country ? (<div className="error">{formik.errors.country}</div>) : null}
                </div>
             </div>

              <select
                className="country"
                value={formik.values.country}
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // onChange={(event) => setCountry(event.target.value)}
              >
                <option></option>
                <option>American</option>
                <option>Afghanistan</option>
                <option>Canada</option>
                <option>Cameroon</option>
                <option>New York</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>New Zealand</option>
                <option>Sweden</option>
                <option>Nairobi</option>
                <option>Iran</option>
                <option>Saudi Arabia</option>
                <option>India</option>
                <option>United Kingdom</option>
                <option>Zimbabwe</option>
              </select>
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div> 
              <input type="submit" value="Submit" className="submitButton" />
              <br />
              <br />
            </div>
            <div >
              {/* <button className="googleButton">Continue with Google</button> */}
                <GoogleLogin 
                    clientId={clientId}
                    buttonText="Continue with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    className="googleButton"
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                />
            </div>
          </form>
        </div>
      </div>

      <div className="secondDiv">
        <img src={require("../../assets/images/happy girl 1.jpeg")} className="happyGirl"/>

        <div>
            <h2 className="converse"> <span style={{color: "#9FFEF3"}}> Join Converse,</span> where conversations come alive.  
                Sign up now and unlock a world of limitless communication, possibilities and connections"</h2>
        </div>
    </div>


    </div>
  );
};

export default Register;



  {/* <Carousel>
      <img src={require("../../assets/images/chat 1.jpg")} className="carousel-image"/>
      <img src={require("../../assets/images/chat 2.jpg")} className="carousel-image"/>
      <img src={require("../../assets/images/chat 1.jpg")}  className="carousel-image"/>
      <img src={require("../../assets/images/chat 2.jpg")}  className="carousel-image"/>
  </Carousel> */}

  
