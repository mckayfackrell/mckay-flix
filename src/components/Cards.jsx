import React, { useState } from "react";
import { HiClock, HiOutlineClock } from "react-icons/hi";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      // console.log("Saved!", {
      //   id: item?.id,
      //   title: item?.title,
      //   img: item?.backdrop_path,
      // });
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save to watch later");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {/* TODO: GET EN VERSION OF BACKDROP PHOTO */}
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <Link
          to={
            item?.title && item?.id
              ? `movie/${item?.title}/${item?.id}`
              : `tv/${item?.name}/${item?.id}`
          }
        >
          <p className="whitespace-pre-line text-xs md:text-sm font-bold flex justify-center items-center h-full text-center hover:cursor-pointer">
            {item?.title ? item?.title : item?.name}
          </p>
        </Link>
        <p onClick={saveShow}>
          {/* TODO: FIX IT FOR THE TV SHOW TO BE SAVED TOO */}
          {like ? (
            <HiClock className="absolute top-4 left-4 text-gray-300 text-2xl" />
          ) : (
            <HiOutlineClock className="absolute top-4 left-4 text-gray-300 text-2xl" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Cards;
