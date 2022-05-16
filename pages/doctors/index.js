import { BreadCrums } from "components/common/index";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { apiUrl, fetcher } from "config/api";
import { ListingPageLoader } from "components/Loaders";
import { useState } from "react";

const Index = () => {
  const { data: doctors } = useSWR(
    `${apiUrl}/doctors?_sort=id:desc&&verification_status=Approved`,
    fetcher
  );
  console.log(doctors);

  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(12);
  const [pageIndex, setPageIndex] = useState(1);
  const nextPage = () => {
    if (doctors?.length - endValue >= 0) {
      setStartValue(startValue + 12);
      setEndValue(endValue + 12);
      setPageIndex(pageIndex + 1);
    }
  };

  const previousPage = () => {
    if (startValue >= 12) {
      setStartValue(startValue - 12);
      setEndValue(endValue - 12);
      setPageIndex(pageIndex - 1);
    }
  };

  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: locations } = useSWR(`${apiUrl}/locations`, fetcher);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const filteredCity = locations?.filter((items) => {
    if (selectedState === "") {
      return "";
    } else if (items?.state.includes(selectedState)) {
      return items;
    }
  });
  const resetState = () => {
    setName("");
    setSpecialty("");
    setGender("");
    setSpecialty("");
    setSelectedState("");
    setCity("");
  };

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Doctor List" title1="Doctor List" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 mb-3">
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
                              <option>Select Gender</option>
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
                              <option>Select Specialty</option>
                              {specialties?.map((items, index) => (
                                <option value={items?.id} key={index}>
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
                <div className="row">
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
                            items?.firstName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            city === "" &&
                            gender === "" &&
                            specialty === ""
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
                            items?.specialty?.id
                              .toString()
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
                            items?.firstName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.gender?.includes(gender) &&
                            specialty === "" &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.lastName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.gender?.includes(gender) &&
                            specialty === "" &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.firstName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            gender === "" &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.lastName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            gender === "" &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.firstName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase()) &&
                            gender === "" &&
                            specialty === ""
                          ) {
                            return items;
                          } else if (
                            items?.lastName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase()) &&
                            gender === "" &&
                            specialty === ""
                          ) {
                            return items;
                          } else if (
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            items?.gender?.includes(gender) &&
                            name === "" &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.gender?.includes(gender) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase()) &&
                            name === "" &&
                            specialty === ""
                          ) {
                            return items;
                          } else if (
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase()) &&
                            name === "" &&
                            gender === ""
                          ) {
                            return items;
                          } else if (
                            items?.firstName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.gender?.includes(gender) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.lastName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.gender?.includes(gender) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            city === ""
                          ) {
                            return items;
                          } else if (
                            items?.gender?.includes(gender) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase()) &&
                            name === ""
                          ) {
                            return items;
                          } else if (
                            items?.firstName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.gender?.includes(gender) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase())
                          ) {
                            return items;
                          } else if (
                            items?.lastName
                              ?.toLowerCase()
                              ?.includes(name.toLowerCase()) &&
                            items?.gender?.includes(gender) &&
                            items?.specialty?.id
                              .toString()
                              .toLowerCase()
                              .includes(specialty) &&
                            items?.address?.city
                              ?.toLowerCase()
                              .includes(city.toLowerCase())
                          ) {
                            return items;
                          }
                        })
                        .slice(`${startValue}`, `${endValue}`)
                        .map((item, index) => (
                          <div
                            className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3"
                            key={index}
                          >
                            <div className="profile-widget me-3">
                              <div className="doc-img">
                                <Link href="#">
                                  <a>
                                    <Image
                                      height={280}
                                      width={300}
                                      className="img-fluid"
                                      alt="User Image"
                                      src={
                                        item?.image?.url ||
                                        "/assets/images/alternate/doctor-male.png"
                                      }
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="pro-content">
                                <h3 className="title">
                                  <Link href="#">
                                    <a>
                                      Dr. {item?.firstName} {item?.lastName}
                                    </a>
                                  </Link>
                                  <i className="fas fa-check-circle verified"></i>
                                </h3>
                                {/* <p className="speciality">10 years experience,</p> */}

                                <ul className="available-info">
                                  <li>{item?.qualification}</li>
                                  <li>
                                    <div className="row align-items-baseline">
                                      <div className="col-6">
                                        <Image
                                          height="20"
                                          width="20"
                                          src={
                                            "/assets/images/alternate/alt-specialty.png"
                                          }
                                          alt=""
                                        />
                                        {item?.specialty?.name}
                                      </div>
                                      <div className="col-6">
                                        <span className="fw-bold me-1 text-info">
                                          Exp:
                                        </span>
                                        <span>
                                          {item?.experienceInYrs} Yrs.
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <i className="far fa-money-bill-alt text-primary"></i>{" "}
                                    ₹ {item?.feeScale?.min} - ₹
                                    {item?.feeScale?.max}
                                    <i
                                      className="fas fa-info-circle"
                                      data-bs-toggle="tooltip"
                                      title="Lorem Ipsum"
                                    ></i>
                                  </li>
                                </ul>
                                <div className="row row-sm">
                                  <div className="col-12">
                                    <Link href={`/doctors/${item?.id}`}>
                                      <a className="btn book-btn">
                                        View Profile
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                </div>

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
                              {" "}
                              {startValue === 0 ? (
                                <button className="btn btn-secondary" disabled>
                                  Prev
                                </button>
                              ) : (
                                <button
                                  className="btn btn-secondary"
                                  onClick={previousPage}
                                >
                                  Prev
                                </button>
                              )}
                              <button className="btn border disabled mx-1">
                                {pageIndex}
                              </button>
                              {doctors?.length - endValue >= 0 ? (
                                <button
                                  className="btn btn-secondary"
                                  onClick={nextPage}
                                >
                                  Next
                                </button>
                              ) : (
                                <button className="btn btn-secondary" disabled>
                                  Next
                                </button>
                              )}
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
