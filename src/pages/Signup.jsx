import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const { user, signup } = UserAuth();
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredMail = email.current.value;
    const enteredPassword = password.current.value;
    try {
      await signup(enteredMail, enteredPassword);
    } catch (error) {
      console.log(error);
    }
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="w-full h-full">
        <img
          className="hiddern sm:block absolute w-full h-window object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/c6e22290-98e5-4eee-b72d-47156e4893fc/IN-en-20220926-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
        <div className="absolute w-full h-full bg-black/60 top-0 left-0" />
        <div className="fixed w-full z-100 px-4 py-24">
          <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto">
            <div className="max-w-[360px] mx-auto py-16">
              <h1 className="text-white font-bold text-3xl">Sign Up</h1>
              <form onSubmit={submitHandler} className="flex flex-col py-4">
                <input
                  ref={email}
                  className="p-3 my-2 bg-gray-700 rounded"
                  placeholder="email"
                  type="email"
                ></input>
                <input
                  ref={password}
                  className="p-3 my-2 bg-gray-700 rounded"
                  placeholder="password"
                  type="password"
                ></input>
                <button className="bg-red-600 text-white rounded py-3 mt-4 font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between mt-8">
                  <p className="text-gray-700">
                    <input type="checkbox" /> Remember Me
                  </p>
                  <p className="text-gray-700">Need Help?</p>
                </div>
                <p className="mt-8">
                  <span className="text-gray-700">
                    Already Subcribed to Netflix?
                  </span>
                  <span className="text-white px-2">
                    <Link to="/signin">Sign In</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
