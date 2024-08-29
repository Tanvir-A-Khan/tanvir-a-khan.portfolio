"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSignup = async () => {
    console.log(user);
    
  };

  return (
    <div className="flex  justify-center items-center h-screen ">
      <div className="w-96 p-6 border-2">
        <h1 className="text-2xl">Signup</h1>

        <div className="flex flex-col  pt-5">
          <p className="text-xs text-gray-600">Username:</p>
          <input
            type="text"
            placeholder="user name"
            className="border-2 p-1 ps-4 rounded-2xl  focus:border-gray-500 focus:outline-none"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col  pt-5">
          <p className="text-xs text-gray-600">Phone:</p>
          <input
            type="phone"
            placeholder="017-25252525"
            className="border-2 p-1 ps-4 rounded-2xl  focus:border-gray-500 focus:outline-none"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col  pt-5">
          <p className="text-xs text-gray-600">Email:</p>
          <input
            type="email"
            placeholder="example@example.com"
            className="border-2 p-1 ps-4 rounded-2xl  focus:border-gray-500 focus:outline-none"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col  pt-5">
          <p className="text-xs text-gray-600">Password:</p>
          <input
            type="password"
            placeholder="password"
            className="border-2 p-1 ps-4 rounded-2xl  focus:border-gray-500 focus:outline-none"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col  pt-5">
          <p className="text-xs text-gray-600">Confirm Password:</p>
          <input
            type="password"
            placeholder="confirm password"
            className="border-2 p-1 ps-4 rounded-2xl  focus:border-gray-500 focus:outline-none"
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          />
        </div>
        
        <button type="button" className="border-2 rounded-xl px-3 bg-slate-300" onClick={()=>onSignup()}>submit</button>

      </div>
    </div>
  );
};

export default Signup;
