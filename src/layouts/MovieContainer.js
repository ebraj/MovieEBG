import { MaxWidthLayout, TopSection, OtherSection } from "layouts";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { extractImgPoster } from "utils/extractImg";
import { Link } from "react-router-dom";
import { MovieCard } from "components";

const MovieContainer = ({
  sectionTitle,
  moviesList = [],
  btnText,
  btnLink,
}) => {
  return (
    <>
      <MaxWidthLayout>
        <OtherSection>
          <div className="flex items-center justify-between space-x-5">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">
              {sectionTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 md:gap-10">
            {moviesList?.map((singlePopularMovie) => {
              return (
                <MovieCard
                  singlePopularMovie={singlePopularMovie}
                  key={singlePopularMovie.id}
                />
              );
            })}
          </div>
          {btnText && (
            <div className="text-center">
              <Link to={btnLink}>
                <button className="custom-green-btn">{btnText}</button>
              </Link>
            </div>
          )}
        </OtherSection>
      </MaxWidthLayout>
    </>
  );
};

export default MovieContainer;
