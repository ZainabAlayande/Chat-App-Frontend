import logo from './logo.svg';
import './App.css';
import CompleteRegistration from './pages/components/CompleteRegistration';
import Login from './pages/components/Login';
import ForgetPassword from './pages/components/ForgetPassword';
import LandingPage from './pages/components/LandingPage';
import Chat from './pages/components/Chat';
import ResetPassword from './pages/components/ResetPassword';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/components/Register';
import ConfirmOTPPage from './pages/components/ConfirmOTPPage';

const clientId = "255159867530-ki9qm6gcrdiqep63mv57i995h50echpa.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load("client: auth2", start)
  });
  
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otpsent" element={<ConfirmOTPPage />} />
          <Route path="/completeregistration" element={<CompleteRegistration />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="chat" element={<Chat />} /> 
        </Routes>
      </Router> 

    </div>
  );
}

export default App;
