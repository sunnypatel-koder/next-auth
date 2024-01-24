import React from 'react';

const UserProfile = ({params}: any) => {
  return (
    <>
      <div className="dark-mode text-white flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <hr className="border-t border-gray-600 w-16 mb-4" />

        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="username" className="text-lg">
            Username:-
          </label>
          <p className="text-xl">{params.id}</p>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="email" className="text-lg">
            Email:-
          </label>
          <p className="text-xl"></p>
        </div>

        {/* Add more user details as needed */}

        <button className="p-3 bg-blue-500 text-white rounded-lg mb-4 focus:outline-none hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </>
  );
};


export default UserProfile;
