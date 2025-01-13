import React from 'react';
// import { Button as ShadCNButton } from "@/components/ui/button";

 // Assuming ShadCN's button component
 import { Button } from "./components/ui/button"
 import { Card } from "./components/ui/card"
 import { Input } from "./components/ui/input"
import { styles } from './Style';
//  import { styles } from "./styles/style"


// import buttonStyles from './style';


// import { Sidebar } from './Sidebar';

// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Logout from './Pages/Logout';
// import Settings from './Pages/Settings';
// import Users from './Pages/Users';
// import { BrowserRouter, Route, Routes } from 'react-router';


// const App = () => {
//   return (
//     <div className="h-screen flex">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-800 text-white shadow-lg">
//         <Sidebar />
//       </div>

//       {/* Main content */}
//       <div className="flex-1 bg-gray-100 p-6 ml-80 rounded-lg shadow-md">
//         <BrowserRouter className="m-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Login" element={<Login />} />
//             <Route path="/Users" element={<Users />} />
//             <Route path="/Settings" element={<Settings />} />
//             <Route path="/Logout" element={<Logout />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// };

// export default App;



const App = () => {
  return (
    <div style={styles.layout.container}>
      <Card style={{...styles.components.card.base}}>
        <h1 style={styles.typography.h1}>Welcome</h1>
        
        <div style={styles.layout.flexBetween}>
          <Input 
            style={{
              ...styles.components.input.base,
              ...styles.variants.default
            }}
          />
          
          <Button 
            style={{
              ...styles.components.button.base,
              ...styles.variants.accent
            }}
          >
            Submit
          </Button>
          <Button>Bye</Button>
        </div>
      </Card>
    </div>
  )
}

export default App

