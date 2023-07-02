import React from 'react'
import { useFormik } from "formik";
import Picture from "../../assets/images/converseFive.jpg";
import "../styles/ForgetPassword.css";



const ForgetPassword = () => {

    const formik = useFormik({
        initialValues: {
          email: "",
        },
    
        onSubmit: (values) => {
          console.log("Form Values: ", values);
        },
    
        validate: (values) => {
          let errors = {};
    
          if (!values.email) {
            errors.email = "  *Required";
          }
    
          return errors;
        },
      });


  return (
    <div className='generalContainer'>
      <div className="upperLayer">
            <div className="converseText">
                <div>
                <img src={Picture} alt="Not found" className="converseLogo"></img>
                </div>
               
               <div>
               <h1 className="converse">CONVERSE</h1>
               </div>
            </div>

            <div className="login">
                <div className='home'>
                  <a href='http://localhost:3001/'>Home</a>
                </div>
                <div className='register'> 
                  <a href='http://localhost:3001/register'>Register</a>
                </div>
            </div>
        </div>

<div className='formContainer'>   

<div className='loginText'>
            <h2 className='h1'>FORGOT PASSWORD</h2>
            </div>
            <div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
              
              <div>
                <br /><br />
              <input
                type="email"
                placeholder="Enter email address for password reset"
                className="input"
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            <br /><br />
            <div>
                <button>SEND LINK</button>
            </div>
            <br />
            </div>

    </div>
  )
}

export default ForgetPassword