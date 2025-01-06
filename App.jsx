import React from 'react';

import { Sidebar } from './Sidebar';
import Signupform from './Signupform';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
     
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      
      <div className="w-64 bg-white shadow-md ml-60 ">
        <Signupform />
      </div>
    </div>
  );
};

export default App;
