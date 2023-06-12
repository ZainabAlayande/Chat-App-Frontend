import logo from './logo.svg';
import './App.css';
import Register from './pages/components/Register';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

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
      <Register />

    </div>
  );
}

export default App;
