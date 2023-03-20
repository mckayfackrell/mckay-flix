import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 z-[100] w-full absolute">
      {/* MCKAYFLIX Logo */}
      <div>
        <Link to="/">
          <h1 className="text-blue-600 text-2xl md:text-4xl font-bold cursor-pointer ml-2">
            MCKAYFLIX
          </h1>
        </Link>
      </div>

      {/* Depending on Auth, Links and Buttons */}
      <div className="hidden md:flex">
        {user?.email ? (
          <div>
            {/* All Movies Link */}
            <Link to="/all_movies">
              <button className="text-white pr-4 text-xs md:text-base">
                All Movies
              </button>
            </Link>

            {/* Account Link */}
            <Link to="/account">
              <button className="text-white pr-4 text-xs md:text-base">
                Account
              </button>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-xs md:text-base mr-2"
            >
              Logout
            </button>
          </div>
        ) : (
          // If user is not logged in, then display this
          <div>
            {/* All Movies Link */}
            <Link to="/all_movies">
              <button className="text-white pr-4 text-xs md:text-base">
                All Movies
              </button>
            </Link>
            {/* Sign In Button */}
            <Link to="/login">
              <button className="text-white pr-4 text-xs md:text-base">
                Sign In
              </button>
            </Link>

            {/* Sign Up Button */}
            <Link to="/signup">
              <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-xs md:text-base">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* hamburger icons */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 mr-3 text-xl text-blue-600"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        onClick={handleClick}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center text-white"
        }
      >
        {/* All Movies Link */}
        <li>
          <Link to="/">
            <p className="text-white hover:underline text-2xl py-2">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/all_movies">
            <p className="text-white text-2xl py-2">All Movies</p>
          </Link>
        </li>
        <li>
          <div>
            {user?.email ? (
              <div>
                {/* Account Link */}
                <Link to="/account">
                  <p className="text-white text-2xl py-2 pb-10">Account</p>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              // If user is not logged in, then display this
              <div className="pt-10">
                {/* Sign In Button */}
                <Link to="/login">
                  <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-sm mr-3">
                    Sign In
                  </button>
                </Link>

                {/* Sign Up Button */}
                <Link to="/signup">
                  <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-sm ml-3">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
