import { BreadCrums, HorizontalPolyclinicCard } from "components/common/index";
import { ListingPageLoader } from "components/Loaders";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import { useState } from "react";
const Index = () => {
  const { data } = useSWR(
    `${apiUrl}/diagnostic-centers?_sort=id:desc&&verification_status=Approved`,
    fetcher
  );
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(5);
  const nextData = () => {
    if (data?.length - endValue >= 0) {
      setStartValue(startValue + 5);
      setEndValue(endValue + 5);
    }
  };

  const previousValue = () => {
    if (startValue >= 5) {
      setStartValue(startValue - 5);
      setEndValue(endValue - 5);
    }
  };
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

  const resetData = () => {
    setSearch("");
    setCity("");
    setSelectedState("");
  };

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Polyclinics List" title1="Polyclinics List" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
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
                          onChange={(e) => setSelectedState(e.target.value)}
                        >
                          <option>Select State</option>
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
                          <option>Select City</option>
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
                        <button onClick={resetData} className="btn w-100">
                          Reset
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
                      .slice(`${startValue}`, `${endValue}`)
                      .map((items, index) => (
                        <HorizontalPolyclinicCard
                          data={items}
                          path="diagnostics"
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
                  <div className="list-pagination">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10"></div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
                        <div className="row">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button type="button" className="btn btn-primary">
                                Prev
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary disabled"
                              >
                                1
                              </button>
                              <button type="button" className="btn btn-primary">
                                Next
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
        </div>
      </main>
    </>
  );
};

export default Index;
