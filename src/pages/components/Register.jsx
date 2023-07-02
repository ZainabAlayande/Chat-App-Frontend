import "../styles/Register.css";
import { React } from "react";
import { useFormik } from "formik";
import { GoogleLogin } from "react-google-login";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Picture from "../../assets/images/converseFive.jpg";
import axios from "axios";


const clientId =
  "255159867530-ki9qm6gcrdiqep63mv57i995h50echpa.apps.googleusercontent.com";

const Register = () => {

  const confirmOTPPage = () => {
    window.location.href = "http://localhost:3000/otpsent";

  }

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
    },

    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },

    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "  *Required";
      }

      if (!values.email) {
        errors.email = "  *Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "  Invalid email format";
      }

      return errors;
    },
  });

  console.log("Visited Fields: ", formik.touched);


  return (
    <div className="background">

      <div className="upperLayer">
            <div className="converseText">
                <div>
                <img src={Picture} alt="Not found" className="converseLogo"></img>
                </div>
               
               <div>
               <h1 className="converse">CONVERSE</h1>
               </div>
            </div>

            <div className='home'>
                  <a href='http://localhost:3000/'>Home</a>
                </div>
        </div>


        <div className='log'>
            <h2 className=''>REGISTER</h2>
            </div>

      <div className="formCon">
        <div className="innerFormContainer">
          <form onSubmit={formik.handleSubmit}>
          
            <div className="">
              <div className="flex">

                <div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="email"
                placeholder="Enter email address"
                className="inputDiv"
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "} 
            
            
            <div className="">
              <div className="flex">

                <div>
                  {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="text"
                placeholder="Enter username"
                className="inputDiv"
                value={formik.values.username}
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}

            
            <div className="buttonContainer">
              <button className="theButton" onclick={confirmOTPPage}>
                Send OTP</button>
              <br />
              <br />
            </div>
           
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;

