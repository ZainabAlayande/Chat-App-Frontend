import React from 'react';
import "../styles/Register.css";
import { useFormik } from "formik";

const ResetPassword = () => {

    
    const formik = useFormik({
        initialValues: {
          password: "",
          confirmPassword: "",
        },
    
        onSubmit: (values) => {
          console.log("Form Values: ", values);
        },
    
        validate: (values) => {
          let errors = {};
    
          if (!values.password) {
            errors.username = "  *Required";
          }
    
    
          if (!values.confirmPassword) {
            errors.password = "  *Required";
          }
    
          return errors;
        },
      });


return (
  <div className='mainContainer'>
      <div className='loginContainer'>
          
          <div className='loginText'>
          <h1 className='h1'>RESET PASSWORD</h1>
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
                {formik.touched.confirmPassword && formik.errors.password ? (
                  <div className="error">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            
            <div>
            <div>
              <label htmlFor=''>Confirm Password</label>
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
              <button>FORGET PASSWORD</button>
          </div>

      </div>
  </div>
)
  
}

export default ResetPassword