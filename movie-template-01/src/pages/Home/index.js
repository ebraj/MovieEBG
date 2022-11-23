import { useEffect, useState } from "react";
import { NavbarFooterIncluded, MaxWidthLayout } from "layouts";
import { getPopularMovies } from "services/api";
import { Carousel } from "components";
import { BsStarFill } from "react-icons/bs";
import { extractImgPoster } from "utils/extractImg";

const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState();

  useEffect(() => {
    (async function () {
      const { results } = await getPopularMovies();
      results && setPopularMovies(results.slice(0, 5));
    })();
  }, []);
  console.log(popularMovies);

  return (
    <>
      <NavbarFooterIncluded>
        <Carousel popularMovies={popularMovies} />

        {/* Upcoming Movies */}
        <MaxWidthLayout>
          <div className="py-20 space-y-10">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">
              Upcoming Movies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {popularMovies?.map((singlePopularMovie) => {
                return (
                  <div key={singlePopularMovie.id} className="space-y-5">
                    <div className="relative rounded-md overflow-hidden">
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
          </div>
        </MaxWidthLayout>
      </NavbarFooterIncluded>
    </>
  );
};

export default Homepage;
