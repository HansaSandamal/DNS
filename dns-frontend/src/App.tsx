import React from 'react';

import './assests/styles/main.scss';
import './App.css';
import Home from './view/Home';
import Login from './view/Login';
import Signup from './view/SignUp';

import { Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Admin from './view/Admin';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import"./config/firebaseConfig";




function App() {

  return (
    <div className="App"> 
     <Header/>
     
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </Router>
       <Footer/>
      
    </div>
  );
}

export default App;
