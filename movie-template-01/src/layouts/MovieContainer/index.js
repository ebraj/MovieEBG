import { MaxWidthLayout, TopSection, OtherSection } from "layouts";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { extractImgPoster } from "utils/extractImg";

const MovieContainer = ({ sectionTitle, moviesList = [], btnText }) => {
  return (
    <>
      <MaxWidthLayout>
        <OtherSection>
          <div className="flex items-center space-x-5 justify-between">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">
              {sectionTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
            {moviesList?.map((singlePopularMovie) => {
              return (
                <div key={singlePopularMovie.id} className="space-y-5">
                  <div className="relative rounded-md overflow-hidden hover:scale-105 md:hover:scale-110 transition-all">
                    <img
                      src={extractImgPoster(singlePopularMovie.poster_path)}
                      className="rounded-md shadow-lg"
                      alt={singlePopularMovie.title}
                    />
                    <p className="flex space-x-2 items-center absolute top-0 right-0 bg-red-500 px-1">
                      <span className="text-xl text-white-500">
                        <BsStarFill />
                      </span>
                      <span className="pt-1">
                        {singlePopularMovie.vote_average}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3>{singlePopularMovie.title}</h3>
                    <p className="text-gray-500">
                      {singlePopularMovie.release_date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button className="custom-green-btn">{btnText}</button>
          </div>
        </OtherSection>
      </MaxWidthLayout>
    </>
  );
};

export default MovieContainer;
