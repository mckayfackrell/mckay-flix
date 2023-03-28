import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { HiClock, HiOutlineClock } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const key = process.env.REACT_APP_TMDB_API_KEY;

const Tv = ({ item }) => {
  const { id } = useParams();
  const [tv, setTv] = useState(null);

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const tvID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(tvID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.name,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  useEffect(() => {
    const fetchTv = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
      );
      const data = await response.json();
      setTv(data);
    };

    fetchTv();
  }, [id]);

  return (
    <div className="w-full h-[250px] md:h-[450px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[250px] md:h-[450px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${tv?.backdrop_path}`}
          alt={tv?.name}
        />
        <div className="absolute w-full top-[13%] p-4 md:p-8">
          <h1 className="text-xl md:text-5xl font-bold">{tv?.name}</h1>
          <div className="py-4 flex items-center">
            <p className="mr-4" onClick={saveShow}>
              {like ? (
                <HiClock className="text-gray-300 text-2xl md:text-3xl" />
              ) : (
                <HiOutlineClock className="text-gray-300 text-2xl md:text-3xl" />
              )}
            </p>
            <a
              href={`https://www.google.com/search?q=${tv?.name}+apple+tv`}
              className="border text-white border-gray-300 py-2 px-3 md:px-5 mr-4 text-sm md:text-xl"
            >
              Apple TV
            </a>
            <a
              href={`https://www.vudu.com/content/movies/search?minVisible=0&returnUrl=%252Fcontent%252Fmovies%252Fhome&searchString=${tv?.name}`}
              className="border text-white border-gray-300 py-2 px-3 md:px-5 mr-4 text-sm md:text-xl"
            >
              VUDU
            </a>
            <a
              // TODO: IMDb LINK GOES TO SEARCH INSTEAD OF imdb_id SPECIFIC LINK
              href={`https://www.imdb.com/find/?q=${tv?.name}&ref_=nv_sr_sm`}
              className="border text-white border-gray-300 py-2 px-3 md:px-5 mr-4 text-sm md:text-xl"
            >
              IMDb
            </a>
          </div>
        </div>
        <div className="w-full text-gray-200 md:flex md:text-left md:text-lg lg:text-xl xl:text-2xl mx-auto px-4 md:px-8 lg:px-16 xl:px-32 mt-4 md:mt-8">
          <img
            className="w-1/3 md:w-1/5 h-auto object-cover md:mr-8 float-left mb-2 mr-4 md:mb-0"
            src={`https://image.tmdb.org/t/p/original/${tv?.poster_path}`}
            alt={tv?.name}
          />
          <div className="md:w-2/3">
            <p className="text-gray-400 text-sm md:text-base mt-4 md:mt-0">
              Aired:{" "}
              {new Date(tv?.first_air_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              {" - "}{" "}
              {new Date(tv?.last_air_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              <br />
              Episode Runtime:{" "}
              {tv?.episode_run_time && tv.episode_run_time.length > 0
                ? `${tv.episode_run_time[0]} minutes`
                : "N/A"}
            </p>
            <h2 className="text-xl font-bold mt-3 mb-3">{tv?.tagline}</h2>
            <p className="">{tv?.overview}</p>
            {/* TODO: INCLUDE GENRES */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tv;
