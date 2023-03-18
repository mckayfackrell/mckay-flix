import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/5eab75b5-7432-4fd3-b60a-1bfe89f7d786/US-en-20230313-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="movie images"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  required
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  required
                />
                <button className="bg-blue-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2 cursor-pointer" type="checkbox" />
                    Remember Me
                  </p>
                  <p className="cursor-pointer hover:underline">Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600 mr-2">Already a member?</span>
                  <Link to="/login" className="cursor-pointer hover:underline">
                    Sign In
                  </Link>
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
