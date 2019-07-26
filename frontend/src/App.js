import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Allcontainer from './containers/Allcontainer';


function App() {
  return (
    <>
      <BrowserRouter>
         <Allcontainer />
          
      </BrowserRouter>
      
    </>
  );
}

export default App;
