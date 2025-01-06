import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router'

import { Sidebar } from './Sidebar';
import Home from '@/Pages/Home';



const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
     
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/fetch" element={<Fetch/>}></Route>
    
  </Routes>
  </BrowserRouter>
      
      {/* <div className="w-64 bg-white shadow-md ml-60 ">
        <Signupform />
      </div> */}
    </div>
  );
};

export default App;
