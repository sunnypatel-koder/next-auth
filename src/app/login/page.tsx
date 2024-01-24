"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {

  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  console.log(user)

  const [loading, setLoading] = React.useState(false)

  const onLogin = async () => {
    try{

      setLoading(true);

      const response = await axios.post('api/users/login', user)

      console.log("Login success: ",response.data)
      
      router.push("/login")
      
    }catch(error:any) {
      console.log("Signup failed", error.message)
      toast.error(error.message)

    }finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div className="dark-mode text-white flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <hr className="border-t border-gray-600 w-16 mb-4" />
        <label htmlFor="email" className="text-lg mb-2">
          Email
        </label>
        <input
          className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

{loading ? <button disabled  className="p-3 bg-blue-400 text-white rounded-lg mb-4 focus:outline-none ">Processing...</button> : <button onClick={onLogin} className="p-3 bg-blue-500 text-white rounded-lg mb-4 focus:outline-none hover:bg-blue-600">Login</button>}
        <Link href="/signup" className="text-blue-400 hover:underline">
          Visit signup page
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
