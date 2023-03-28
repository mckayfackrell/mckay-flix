import React from "react";
import moviesImage from "../assets/movies.png";
import Row from "../components/Row";
import requests from "../Requests";

const AllMovies = () => {
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
          <h1 className="text-3xl md:text-5xl font-bold">All Movies</h1>
        </div>
      </div>
      
      <Row
        rowID="1"
        fetchURL={requests.requestList}
      />
    </>
  );
};

export default AllMovies;
