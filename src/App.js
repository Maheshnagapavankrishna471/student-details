import React from 'react';
import './App.css';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import {Route,Routes } from 'react-router-dom';
import Home from'./Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
          <h1 style={{color:'white'}}>STUDENTS DETAILS</h1>
          <ToastContainer />

          <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Addstudent' element={<AddStudent/>}/>
            <Route path='/updatecontact/:id' element={<EditStudent/>}/>
          </Routes>
          </>
          
    </div>
    
  );
}

export default App;
