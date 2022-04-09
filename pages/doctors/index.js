import { BreadCrums, HorizontalDoctorCard } from "components/common/index";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { ListingPageLoader } from "components/Loaders";
import { useState } from "react";

const Index = () => {
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: locations } = useSWR(`${apiUrl}/locations`, fetcher);
  const [name, setName] = useState;
  const [specialty, setSpecialty] = useState;
  const [gender, setGender] = useState;
  const [city, setCity] = useState;
  const [selectedState, setSelectedState] = useState;

  const filteredCity = locations?.filter((items) => {
    if (selectedState === "") {
      return "";
    } else if (items?.state.includes(selectedState)) {
      return items;
    }
  });
  const resetState = () => {
    setName;
    setSpecialty;
    setGender;
    setSpecialty;
    setSelectedState;
    setCity;
  };

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
                          onChange={(e) => setName(e.target.value)}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="card search-filter">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Filters</h4>
                    </div>
                    <div className="card-body">
                      <h4>Filter By Location</h4>
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
                          <option selected>Select City</option>
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
                      <div className="filter-widget">
                        <h4>Gender</h4>
                        <div className="row">
                          <div className="col-12">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option selected>Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>Specialities</h4>
                        <div className="row">
                          <div className="col-12">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={specialty}
                              onChange={(e) => setSpecialty(e.target.value)}
                            >
                              <option selected>Select Specialty</option>
                              {specialties?.map((items, index) => (
                                <option value={items?.name} key={index}>
                                  {items?.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="btn-search">
                        <button onClick={resetState} className="btn w-100">
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {doctors ? (
                  <>
                    {doctors
                      ?.filter((items) => {
                        if (
                          name === "" &&
                          gender === "" &&
                          specialty === "" &&
                          city === ""
                        ) {
                          return items;
                        } else if (
                          items?.lastName
                            ?.toLowerCase()
                            ?.includes(name.toLowerCase()) &&
                          city === "" &&
                          gender === "" &&
                          specialty === ""
                        ) {
                          return items;
                        } else if (
                          items?.gender?.includes(gender) &&
                          name === "" &&
                          specialty === "" &&
                          city === ""
                        ) {
                          return items;
                        } else if (
                          items?.specialty?.name
                            .toLowerCase()
                            .includes(specialty) &&
                          name === "" &&
                          gender === "" &&
                          city === ""
                        ) {
                          return items;
                        } else if (
                          items?.address?.city
                            ?.toLowerCase()
                            .includes(city.toLowerCase()) &&
                          name === "" &&
                          gender === "" &&
                          specialty === ""
                        ) {
                          return items;
                        } else if (
                          items?.specialty?.name.includes(specialty) &&
                          items?.gender.includes(gender) &&
                          city === ""
                        ) {
                          return items;
                        } else if (
                          items?.address?.city
                            .toLowerCase()
                            .includes(city.toLowerCase()) &&
                          items?.specialty?.name.includes(specialty) &&
                          gender === ""
                        ) {
                          return items;
                        } else if (
                          items?.gender.includes(gender) &&
                          items?.address?.city
                            .toLowerCase()
                            .includes(city.toLowerCase()) &&
                          specialty === ""
                        ) {
                          return items;
                        } else if (
                          items?.gender.includes(gender) &&
                          items?.address?.city
                            .toLowerCase()
                            .includes(city.toLowerCase()) &&
                          items?.specialty?.name.includes(specialty)
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
