import { Button } from '../components/ui/button';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'



const Logout = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        const logout=async()=>{
            try{
                let { error } = await supabase.auth.signOut();
                console.log("Logged out successfull");
                navigate("/");
            }
            catch(error)
            {
                console.log("Not Loggedout");
            }
        }
        logout();
    },[])
  return (
    <div>
       <Button onClick={()=>{navigate("/")}}>Home</Button>
    </div>
  )
}

export default Logout