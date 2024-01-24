"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {

  const router = useRouter();
  
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  })

  console.log(user);

  const [loading, setLoading] = React.useState(false)

  const onSignup =async () => {
    try{
      setLoading(true);
      const response = await axios.post("/api/users/signup", user)

      console.log("Signup success: ",response.data)
      
      router.push("/login")

    }catch(error:any) {
      console.log("Signup failed", error.message)
      toast.error(error.message)

    }finally{
      setLoading(false)
    }
  }

  // useEffect(() =>{
  //   if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0 ){
  //     setButtonDisabled(false)
  //   } else{
  //     setButtonDisabled(true)
  //   }
  // },[user])

  return (
    <>
  <div className="dark-mode text-white flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
  <h1 className="text-3xl font-bold mb-4">Sign Up </h1>
  <hr className="border-t border-gray-600 w-16 mb-4" />
  <label htmlFor="username" className="text-lg mb-2">
    Username
  </label>
  <input 
    className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    type="text"
    id="username" 
    placeholder="Username"
    value={user.username} 
    onChange={(e) => setUser({...user, username: e.target.value})} 
  />
  <label htmlFor="email" className="text-lg mb-2">
    Email
  </label>
  <input 
    className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    type="email"
    id="email" 
    placeholder="Email"
    value={user.email} 
    onChange={(e) => setUser({...user, email: e.target.value})} 
  />
  <label htmlFor="password" className="text-lg mb-2">
    Password
  </label>
  <input 
    className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    type="password"
    id="password" 
    placeholder="Password"
    value={user.password} 
    onChange={(e) => setUser({...user, password: e.target.value})} 
  />

  
    {loading ? <button disabled  className="p-3 bg-blue-400 text-white rounded-lg mb-4 focus:outline-none ">Processing...</button> : <button onClick={onSignup} className="p-3 bg-blue-500 text-white rounded-lg mb-4 focus:outline-none hover:bg-blue-600">SignUp</button>}
  
  <Link href='/login' className="text-blue-400 hover:underline">
    Visit login page
  </Link>
</div>

    </>
  )
}

export default SignupPage