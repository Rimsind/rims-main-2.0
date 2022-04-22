import {
  BreadCrums,
  LocationFilter,
  HorizontalPolyclinicCard,
  ListPagination,
} from "components/common/index";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import { ListingPageLoader } from "components/Loaders";
import { useState } from "react";
const Index = () => {
  const { data } = useSWR(
    `${apiUrl}/nursing-homes?_sort=id:desc&&verification_status=Approved`,
    fetcher
  );
  const { data: locations } = useSWR(`${apiUrl}/locations`, fetcher);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const filteredCity = locations?.filter((items) => {
    if (selectedState === "") {
      return items;
    } else if (items?.state.includes(selectedState)) {
      return items;
    }
  });

  return (
    <>
      <main className="main">
        <BreadCrums
          title="Home / Nursing-Home List"
          title1="Nursing Home List"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3">
                <div className="sticky-top">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Search</h4>
                    </div>
                    <div className="card-body">
                      <form className="d-flex">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </form>
                    </div>
                  </div>{" "}
                  <div className="card search-filter">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Location Filter</h4>
                    </div>
                    <div className="card-body">
                      <div className="filter-widget">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) => setSelectedState(e.target.value)}
                        >
                          <option selected disabled>
                            Select State
                          </option>
                          {locations?.map((items, index) => (
                            <option value={items?.state} key={index}>
                              {items?.state}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="filter-widget">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option selected disabled>
                            Select City
                          </option>
                          {filteredCity?.map((items) => (
                            <>
                              {items?.city?.map((val, index) => (
                                <option value={val?.city_name} key={index}>
                                  {val?.city_name}
                                </option>
                              ))}
                            </>
                          ))}
                        </select>
                      </div>

                      <div className="btn-search">
                        <button type="button" className="btn w-100">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {data ? (
                  <>
                    {data
                      ?.filter((items) => {
                        if (search === "" && city === "") {
                          return items;
                        } else if (
                          items.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) &&
                          city === ""
                        ) {
                          return items;
                        } else if (
                          items.city
                            ?.toLowerCase()
                            .includes(city?.toLowerCase()) &&
                          search === ""
                        ) {
                          return items;
                        } else if (
                          items.city
                            ?.toLowerCase()
                            .includes(city?.toLowerCase()) &&
                          items.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return items;
                        }
                      })
                      .map((items, index) => (
                        <HorizontalPolyclinicCard
                          data={items}
                          link="nursing-homes"
                          key={index}
                        />
                      ))}
                  </>
                ) : (
                  <>
                    <ListingPageLoader />
                    <ListingPageLoader />
                    <ListingPageLoader />
                    <ListingPageLoader />
                  </>
                )}

                <div className="user-main-pagination mb-4">
                  <ListPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
