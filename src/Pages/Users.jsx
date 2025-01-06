import React, { useEffect, useState } from "react";

import supabase from "../supabase"; 

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";



const Users = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.log("Error fetching user:", error.message);
        } else {
          setUser(user); // Set the user state
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchUser();
  }, [!user]);
  

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {user ? (
              Object.entries(user)
                .filter(
                  ([key, value]) => value !== null && value !== undefined
                ) // Filter out null or undefined values
                .map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong>{" "}
                    {typeof value === "string" || typeof value === "number"
                      ? value
                      : JSON.stringify(value)}
                  </p>
                ))
            ) : (
              <p>Loading user details...</p>
            )}
          </CardDescription>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Button onClick={()=>{navigate("/Logout")}}>
        Logout
      </Button>
    </div>
    
  );
};

export default Users;