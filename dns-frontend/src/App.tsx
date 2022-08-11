import React from 'react';

import './assests/styles/main.scss';
import './App.css';
import Home from './view/Home';
import Login from './view/Login';
import Signup from './view/SignUp';
import SignIn from './components/SignIn';
import { Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Admin from './view/Admin';

function App() {
  return (
    <div className="App">
     
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn userName='hansa' password='ttt'/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </Router>
       
      
    </div>
  );
}

export default App;
