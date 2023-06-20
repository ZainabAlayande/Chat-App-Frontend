import React from 'react'
import { useFormik } from "formik";


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
    <div>

<div>   
            <div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
              
              <div>
              <div>
                <label htmlFor=''>Email Address</label>
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
            </div>

            <div>
                <button>CONFIRM</button>
            </div>

    </div>
  )
}

export default ForgetPassword