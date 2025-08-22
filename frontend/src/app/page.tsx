"use client"; 

import React, { useRef, useState } from "react";

interface UserData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [userData, setUserData] = useState<UserData>({ email: "", password: "" });

  const handleEnterKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    ref: React.RefObject<HTMLInputElement> | null
  ) => {
    if (e.key === "Enter" && ref?.current) {
      e.preventDefault();
      ref.current.focus();
      console.log((e.target as HTMLInputElement).value);
    }
  };

  const handleSubmit = () => {
    if (userData.email === "") {
      alert("Please enter email");
    } else if (userData.password === "") {
      alert("Please enter password");
    } else {
      console.log(userData);
      console.log(userData.email);
      console.log(userData.password);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[url('https://academic.iiti.ac.in/app/public/assets/img/login-bg/2.jpg')] bg-cover bg-center w-screen h-screen fixed">
      <div className="bg-blue-700/30 backdrop-blur-xs w-full h-full flex justify-center items-center px-5">
        <div className="loginCard bg-[#272757]/35 flex flex-col items-center rounded-2xl w-fit px-5 sm:px-10 py-10 shadow-[10px_10px_10px_rgba(0,0,0,0.5)]">
          <div className="title flex items-center gap-5 mb-5">
            <img
              className="rounded-2xl"
              src="/acadlogo.jpg"
              width={100}
              alt="Academic Council"
            />
            <h1 className="text-4xl font-bold text-center">
              <span>Academic Council </span> | <span> IIT Indore</span>
            </h1>
          </div>

          <input
            value={userData.email}
            name="email"
            onChange={handleChange}
            ref={emailRef}
            onKeyDown={(e) => handleEnterKeyDown(e, passwordRef)}
            type="text"
            placeholder="Email id"
            className="bg-white/75 text-black/80 text-lg mb-5 px-5 py-2 rounded-lg focus:shadow-[10px_10px_10px_rgba(0,0,0,0.5)] outline-none w-[280px] sm:w-[450px] lg:w-[500px] transition-all duration-100 ease-in-out"
          />

          <input
            value={userData.password}
            name="password"
            onChange={handleChange}
            ref={passwordRef}
            onKeyDown={(e) => handleEnterKeyDown(e, null)}
            type="password"
            placeholder="Password"
            className="bg-white/75 text-black/80 text-lg mb-5 px-5 py-2 rounded-lg focus:shadow-[10px_10px_10px_rgba(0,0,0,0.5)] outline-none w-[280px] sm:w-[450px] lg:w-[500px] transition-all duration-100 ease-in-out"
          />

          <div className="flex justify-center mb-5">
            <button
              onClick={handleSubmit}
              className="bg-white/75 hover:bg-white/50 text-black/70 hover:text-black/80 px-5 py-2 text-lg font-bold rounded-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
