import {
  BreadCrums,
  SearchFilter,
  LocationFilter,
  HorizontalDoctorCard,
} from "components/common/index";

import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { ListingPageLoader } from "components/Loaders";
import { useState } from "react";

const Index = () => {
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  const [search, setSearch] = useState("");

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Doctor List" title1="Doctor List" />
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
                  </div>
                  <div className="card search-filter">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Location Filter</h4>
                    </div>
                    <div className="card-body">
                      <div className="filter-widget">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select State</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="filter-widget">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select City</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="btn-search">
                        <button type="button" className="btn w-100">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card search-filter">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Search Filter</h4>
                    </div>
                    <div className="card-body">
                      <div className="filter-widget">
                        <h4>Gender</h4>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Male"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox1"
                              >
                                Male
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Female"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox1"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Others"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox1"
                              >
                                Others
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>Specialities</h4>
                        <div className="row">
                          {specialties?.map((items, index) => (
                            <div className="col-12" key={index}>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={items?.id}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  {items?.name}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <div className="btn-search">
                        <button type="button" className="btn w-100">
                          Search
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {doctors ? (
                  <>
                    {doctors
                      ?.filter((items) => {
                        if (search === "") {
                          return items;
                        } else if (
                          items.firstName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return items;
                        } else if (
                          items.lastName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return items;
                        }
                      })
                      .map((item, index) => (
                        <HorizontalDoctorCard data={item} key={index} />
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
                  <div className="list-pagination">
                    <div className="row">
                      <div className="col-lg-10"></div>
                      <div className="col-2">
                        <div className="row">
                          <div className="col-6 ">
                            <button className="btn btn-primary">
                              <i className="fal fa-long-arrow-left me-2"></i>
                              Prev
                            </button>
                          </div>
                          <div className="col-6">
                            <button className="btn btn-primary">
                              Next
                              <i className="fal fa-long-arrow-right ms-2"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
