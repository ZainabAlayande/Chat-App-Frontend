import "../styles/LandingPage.css";
import Picture from "../../assets/images/converseFive.jpg";


import React from 'react'

const LandingPage = () => {

    const handleButtonClick = (event) => {

        if (event.target.name == "register") {
            window.location.href = 'http://localhost:3000/register';
        }

        if (event.target.name == "login") {
            window.location.href = 'http://localhost:3000/login';
        }

       
    }
  return (
    <div className="mainContainer">
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
                <button name="login" onClick={handleButtonClick}>LOGIN</button>
            </div>
        </div>

        <div className="secondContainer">
            <div>
                <img src="" alt=""></img>     
            </div>

            <div>
                <div>
                    <h1>
                    <span style={{ color: "black" }}> Join Converse,</span> where
            conversations come alive. Sign up now and unlock a world of
            limitless communication, possibilities and connections"
                    </h1>
                </div>

                <div>
                    <p>Join Converse, where
            conversations come alive. Sign up now and unlock a world of
            limitless communication, possibilities and connections"</p>
                </div>
            </div>

            <div className="button">
                <button name="register" className="theButton" onClick={handleButtonClick}>
                    REGISTER</button>
            </div>


        </div>

    </div>
  )
}

export default LandingPage