import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [showFullText, setShowFullText] = useState(false);

  // const instead of let before
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // TODO:this while statement wasn't present

  // if a movie is "undefined" it will not be shown in the main backdrop screen
  // while (!movie) {
  //   movie = movies[Math.floor(Math.random() * movies.length)];
  // }

  useEffect(() => {
    axios.get(requests.requestList).then((response) => {
      setMovies(response.data.items);
    });
  }, []);

  // const toggleFullText = () => {
  //   setShowFullText(!showFullText);
  // };

  const truncateString = (str, num) => {
    if (str?.length > num && !showFullText) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[370px] md:h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[370px] md:h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[16%] p-4 md:p-8">
          <h1 className="text-xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="py-4">
            <Link to={`movie/${movie?.title}/${movie?.id}`}>
              <button className=" bg-gray-300 text-black py-2 px-5 text-xs md:text-base">
                View More
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Released:{" "}
            {new Date(movie?.release_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <p
            className="w-full text-sm md:text-base md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200"
            // onClick={toggleFullText}
            // TODO: right now it is just the'...' but if you unblock this it will load up the entire prompt but also refresh the page, so I want prevent default but it isn't working
          >
            {truncateString(movie?.overview, 150)}
            {showFullText && truncateString(movie?.overview.slice(150), 999999)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
