import "../styles/ConfirmOTPPage.css";
import { React } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Picture from "../../assets/images/converseFive.jpg";
import ConfirmationMark from "../../assets/images/confirmationImage.jpg";


const ConfirmOTPPage = () => {


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

        </div>


      <div className="container">
    
       <div className="confirmationMarkContainer">
        <img src={ConfirmationMark} alt="No image" className="markSign"/>
       </div><br></br><br></br>

       <div className="ptag">
        <p>Please check your mail. OTP Sent to your mail box</p>
       </div>
      </div>

    </div>
  );
};

export default ConfirmOTPPage;

