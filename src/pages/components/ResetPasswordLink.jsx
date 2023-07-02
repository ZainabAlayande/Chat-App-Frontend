import React from 'react'
import "../styles/Login.css";
import "../styles/L.css";
import { useFormik } from "formik";

const ResetPassward = () => {

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
            
          
            <div>
                Please check you mail 
            </div>

            <button>YOW</button>

        </div>
    </div>
  )
}

export default Login