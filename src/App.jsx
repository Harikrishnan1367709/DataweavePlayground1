import React from 'react';

import { Sidebar } from './Sidebar';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router';


const App = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6 ml-80 rounded-lg shadow-md">
        <BrowserRouter className="m-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

