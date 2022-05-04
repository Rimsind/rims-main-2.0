import { BreadCrums } from "components/common";
import { fetcher, apiUrl } from "config/api";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const Specialities = () => {
  const { data: specialities } = useSWR(`${apiUrl}/specialties`, fetcher);
  console.log(specialities);
  return (
    <>
      <div className="page-wrapper">
        <BreadCrums title="Home / Specialities" title1="Specialities" />
        <div className="container">
          <div className="specialities-card my-5">
            <div className="row align-items-center">
              {specialities?.map((items, index) => (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
                  key={index}
                >
                  <div className="profile-widget browse-widget">
                    <Image
                      src="/assets/images/specialty-bg.jpg"
                      height="350px"
                      width="350px"
                      alt="Specialities Image"
                    />
                    <div className="overlay">
                      <Image
                        height={120}
                        width={120}
                        alt=""
                        src={
                          items?.image?.url ||
                          "/assets/images/alternate/alt-specialty.png"
                        }
                      />
                      <h3 className="fs-5 mt-3">{items?.name}</h3>
                      <a href="#" className="arrows" tabIndex="0">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialities;
