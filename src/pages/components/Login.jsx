import React from 'react'
import "../styles/Login.css";
import { useFormik } from "formik";

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
        <div className='loginContainer'>
            
            <div className='loginText'>
            <h1 className='h1'>LOGIN</h1>
            </div>

            <div>   
            <div>
                  {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
              
              <div>
                <div>
                <label htmlFor=''>Username</label>
                </div>

              <input
                type="text"
                placeholder=""
                className="input"
                value={formik.values.username}
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>{" "}
            </div>

            <div>   
            <div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
              
              <div>
              <div>
                <label htmlFor=''>Password</label>
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
            </div>

            <div>
            
          <p>
            Forgot Password? <a href="http://localhost:3001/forgetpassword">Click Here</a>
          </p>
            </div>

            <div>
                <button>LOGIN</button>
            </div>

        </div>
    </div>
  )
}

export default Login