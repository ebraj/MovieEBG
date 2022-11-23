import React from "react";
import { MaxWidthLayout } from "layouts";
import { truncateString } from "utils/truncateString";
import { extractImgPoster } from "utils/extractImg";

/**
 * React Icons
 */
import { BsStarFill } from "react-icons/bs";

const CarouselItem = ({ singleMovie = {} }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.8953956582633054) 0%, rgba(0,0,0,0.7469362745098039) 50%, rgba(0,0,0,0.9) 100%), url(https://image.tmdb.org/t/p/original/${singleMovie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      className="min-h-[60vh] w-full h-full flex items-center py-28 md:py-32"
    >
      <MaxWidthLayout>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[60%_30%] md:gap-[10%]">
          {/* Poster Section */}
          <div className="flex items-center justify-center md:order-2 md:justify-end">
            <img
              src={extractImgPoster(singleMovie.poster_path)}
              alt={singleMovie.title}
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-5 md:order-1 self-center">
            <h1 className="text-center md:text-left custom-movie-title">
              {singleMovie.title}
            </h1>
            <p className="flex space-x-2 items-center">
              <span className="text-2xl text-yellow-500">
                <BsStarFill />
              </span>
              <span className="pt-1">{singleMovie.vote_average}</span>
            </p>
            <p className="leading-7 md:w-[80%] lg:w-[75%]">
              {truncateString(singleMovie.overview)}
            </p>
            <button className="custom-green-btn">View Details</button>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
};

export default CarouselItem;
