"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage (){
  const router = useRouter();
   const [user, setUser] = React.useState({
          email:"",
          password:"", 
   })
  
      const [buttonDisable, setbuttonDisable] = React.useState(true);
      const [loading,setloading] = React.useState(false);

    const onLogin = async() =>{
       
       try {
              setloading(true);
              const response = await axios.post("/api/users/login",user);
              console.log("Login success ", response.data);
              router.push("/profile");
            
            } catch (error:any) {
              console.log("Login Failed", error.message);
              toast.error(error.message);
      
            }finally{
              setloading(false)
            }
    }
    
    useEffect(() =>{
         if (user.email.length >0 && user.password.length>0 ){
              setbuttonDisable(false);
         } else {
          setbuttonDisable(true);
         }
    
        },[user]);


    return (
        <div>
           
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {loading ? "Processing" : "Login "}
             </h1>

        <div className="space-y-4">
         
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email:
                e.target.value })}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
    
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password:
                e.target.value })}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={onLogin}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-600 font-medium hover:underline">
           Signup 
          </Link>
        </p>
      </div>
    </div>
        </div>
    )
}