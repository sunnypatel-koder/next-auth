"use client"
import axios from "axios";
import Link from "next/link"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProfilePage = () => {

  const router = useRouter()
  const [data, setData] = useState({
    username: '',
    email: '',
  });

  const user = {
    username: 'exampleUser',
    email: 'user@example.com',
    // Add more user details as needed
  };

  const logout = async () =>{
    try{
      await axios.get('/api/users/logout')
      toast.success('Logout Successful')

      router.push('/login')

    }catch(error:any){
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/me');
   
      setData({
        username: res.data.data.username,
        email: res.data.data.email,
      });

      // router.push(`/profile/${res.data.data._id}`)

     
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  console.log(data)
  return (
    <>
      <div className="dark-mode text-white flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <hr className="border-t border-gray-600 w-16 mb-4" />

        <div className="flex gap-3 mb-4">
          {/* <h2 className="padding rounded bg-green-500">{data === 'nothing' ? "Nothing" : ''} */}
          {/* </h2> */}
          <label htmlFor="username" className="text-lg">
            Username:-
          </label>
          <p className="text-xl">{data.username}</p>
        </div>

        <div className=" flex gap-3  mb-4">
          <label htmlFor="email" className="text-lg">
            Email:-
          </label>
          <p className="text-xl">{data.email}</p>
        </div>

        {/* Add more user details as needed */}

        <button className="p-3 bg-blue-500 text-white rounded-lg mb-4 focus:outline-none hover:bg-blue-600">
          Edit Profile
        </button>
        <button onClick={logout} className="p-3 bg-red-600 text-white rounded-lg mb-4 focus:outline-none hover:bg-blue-600">
          Logout
        </button>
        <button onClick={getUserDetails} className="p-3 bg-green-600 text-white rounded-lg mb-4 focus:outline-none hover:bg-blue-600">
          Get User Details
        </button>

      </div>
    </>
  );
};

export default ProfilePage;
