import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const AdminTV = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Invalid credentials");
    }
  };

  return (
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
            <h1 className="text-3xl font-bold">Add New TV Series</h1>
            {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                //TODO: change it to setMovie or something
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="series_name"
                placeholder="TV Series Name"
                required
              />
              <p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="mr-2 cursor-pointer"
                  type="checkbox"
                />
                Apple TV
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="apple_link"
                placeholder="Apple Link"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="imdb_link"
                placeholder="IMDB Link"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="tv_id"
                placeholder="TMDB ID"
              />
              <button className="bg-blue-600 py-3 my-6 rounded font-bold">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTV;
