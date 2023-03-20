import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { HiClock, HiOutlineClock } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const key = process.env.REACT_APP_TMDB_API_KEY;

const Movie = ({ item }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

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
          <div className="py-4 flex items-center">
            <p className="mr-4" onClick={saveShow}>
              {like ? (
                <HiClock className="text-gray-300 text-3xl" />
              ) : (
                <HiOutlineClock className="text-gray-300 text-3xl" />
              )}
            </p>
            <a
              href={`https://www.google.com/search?q=${movie?.title}+apple+tv+movie`}
              className="border text-white border-gray-300 py-2 px-5 mr-4"
            >
              Apple TV
            </a>
            <a
              href={`https://www.vudu.com/content/movies/search?minVisible=0&returnUrl=%252Fcontent%252Fmovies%252Fhome&searchString=${movie?.title}`}
              className="border text-white border-gray-300 py-2 px-5 mr-4"
            >
              VUDU
            </a>
            <a
              href={`https://www.imdb.com/title/${movie?.imdb_id}`}
              className="border text-white border-gray-300 py-2 px-5 mr-4"
            >
              IMDB
            </a>
          </div>
        </div>
        <div className="w-full text-gray-200 text-center md:text-lg lg:text-xl xl:text-2xl">
          <h1>About</h1>
          <p className="text-gray-400 text-base mt-4 mb-8 md:mb-16">
            Released:{" "}
            {new Date(movie?.release_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p>
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
