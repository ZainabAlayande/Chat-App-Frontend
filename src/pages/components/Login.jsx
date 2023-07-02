import React from 'react'
import "../styles/Login.css";
import { useFormik } from "formik";
import Picture from "../../assets/images/converseFive.jpg";

const Login = () => {

        const formik = useFormik({
          initialValues: {
            username: "",
            password: "",
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
      
            return errors;
          },
        });


  return (
    <div className='mainContainer'>

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

        <div className='loginContainer'>
            
            <div className='loginText'>
            <h2 className='h1'>LOGIN NOW</h2>
            </div>
            <br /><br />

            <div>   
            <div>
                  {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
              
              <div>

              <input
                type="text"
                placeholder="Enter username"
                className="input"
                value={formik.values.username}
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <br /><br /><br />
            </div>{" "}
            </div>

            <div>   
            <div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
              
              <div>

              <input
                type="password"
                placeholder="Enter password"
                className="input"
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              
            </div>{" "}
            </div>

            <div>
            
          <p>
            Forgot Password? <a href="http://localhost:3001/forgetpassword">Click Here</a>
          </p>
            </div>

            <div>
                <button>CONTINUE</button>
            </div>
            <br />

        </div>
    </div>
  )
}

export default Login