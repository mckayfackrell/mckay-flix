import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [showFullText, setShowFullText] = useState(false);

  // const instead of let before
  let movie = movies[Math.floor(Math.random() * movies.length)];

  // this while statement wasn't present
  
  // if a movie is "undefined" it will not be shown in the main backdrop screen
  while (!movie) {
    movie = movies[Math.floor(Math.random() * movies.length)];
  }

  useEffect(() => {
    axios.get(requests.requestList).then((response) => {
      setMovies(response.data.items);
    });
  }, []);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const truncateString = (str, num) => {
    if (str?.length > num && !showFullText) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="py-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
            <a
              href={`https://www.google.com/search?q=${movie?.title}+apple+tv+movie`}
              className="border text-white border-gray-300 py-2 px-5 ml-4"
            >
              Apple TV
            </a>
            <a
              href={`https://www.vudu.com/content/movies/search?minVisible=0&returnUrl=%252Fcontent%252Fmovies%252Fhome&searchString=${movie?.title}`}
              className="border text-white border-gray-300 py-2 px-5 ml-4"
            >
              VUDU
            </a>
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
            className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200"
            onClick={toggleFullText}
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
