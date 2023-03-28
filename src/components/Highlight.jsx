import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../Requests";

const Highlight = () => {
  const [items, setItems] = useState([]);
  const [showFullText, setShowFullText] = useState(false);
  const item = items[Math.floor(Math.random() * items.length)];

  useEffect(() => {
    axios.get(requests.requestList).then((response) => {
      setItems(response.data.items);
    });
  }, []);

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
        {/* TODO: GET EN VERSION OF BACKDROP PHOTO */}
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
          alt={item?.title ? item?.title : item?.name}
        />
        <div className="absolute w-full top-[16%] p-4 md:p-8">
          <h1 className="text-xl md:text-5xl font-bold">
            {item?.title ? item?.title : item?.name}
          </h1>
          <div className="py-4">
            <Link
              to={
                item?.title && item?.id
                  ? `movie/${item?.title}/${item?.id}`
                  : `tv/${item?.name}/${item?.id}`
              }
            >
              <button className=" bg-gray-300 text-black py-2 px-5 text-xs md:text-base">
                View More
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            {item?.release_date && (
              <>
                Released:{" "}
                {new Date(item.release_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </>
            )}
          </p>

          <p className="w-full text-sm md:text-base md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(item?.overview, 150)}
            {showFullText && truncateString(item?.overview.slice(150), 999999)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
