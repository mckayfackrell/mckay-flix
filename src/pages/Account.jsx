import React from "react";
import SavedShows from "../components/SavedShows";
import moviesImage from "../assets/movies.png";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[250px] md:h-[450px] object-cover"
          src={moviesImage}
          alt=""
        />
        <div className="bg-black/75 fixed top-0 left-0 w-full h-[450px]"></div>
        <div className="absolute top-[15%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Collection</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
