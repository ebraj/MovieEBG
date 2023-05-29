import React, { useEffect, useState } from "react";

/**
 * Components and layouts...
 */
import { MaxWidthLayout, NavbarFooterIncluded, TopSection } from "layouts";
import { Pagination, PersonCard } from "components";
import { getPeople } from "services/api";
const People = () => {
  const [people, setPeople] = useState();

  /**
   * For pagnination...
   */
  const [page, setPage] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const moviesPerPage = 20;
  const numberOfRecordsVisited = page * moviesPerPage;
  const totalPagesCalculated = Math.ceil(people?.total_results / moviesPerPage);
  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };

  useEffect(() => {
    (async function () {
      const {
        results: peopleResults,
        total_pages,
        total_results,
      } = await getPeople(selectedPage);
      peopleResults &&
        setPeople({
          peopleResults,
          total_pages,
          total_results,
        });
    })();
  }, [selectedPage]);

  console.log(people);
  return (
    <NavbarFooterIncluded>
      <MaxWidthLayout>
        <TopSection>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:space-x-5 md:justify-between">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">People</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 md:gap-10">
            {people?.peopleResults
              .slice(
                numberOfRecordsVisited,
                numberOfRecordsVisited + moviesPerPage
              )
              ?.map((singlePerson) => {
                return (
                  <PersonCard
                    key={singlePerson.id}
                    singlePerson={singlePerson}
                  />
                );
              })}
          </div>
          <div>
            <Pagination
              totalPagesCalculated={totalPagesCalculated}
              handlePageChange={handlePageChange}
            />
          </div>
        </TopSection>
      </MaxWidthLayout>
    </NavbarFooterIncluded>
  );
};

export default People;
