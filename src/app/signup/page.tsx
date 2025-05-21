"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";
import toast from "react-hot-toast";


export default function SignupPage (){
  const router = useRouter();
   const [user, setUser] = React.useState({
          username:"",
          email:"",
          password:"",
          
   })
   
   const [buttonDisable, setbuttonDisable] = React.useState(true);
   const [loading,setloading] = React.useState(false);

    const onSignup = async () =>{
      try {
        setloading(true);
        const response = await axios.post("/api/users/signup",user);
        console.log("Signup success ", response.data);
        router.push("/login");
      

      } catch (error:any) {
        console.log("Signup Failed", error.message);
        toast.error(error.message);

      }finally{
        setloading(false)
      }

    }
    
    useEffect(() =>{
     if (user.email.length >0 && user.password.length>0 && user.username.length>0){
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
          {loading ? "Processing" : "Create Your Account"}
             </h1>

        <div className="space-y-4">
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username:
                e.target.value })}
            placeholder="name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

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
            onClick={onSignup}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            {buttonDisable ? "No signup": "Signup"}
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 font-medium hover:underline">
           Login 
          </Link>
        </p>
      </div>
    </div>
        </div>
    )
}