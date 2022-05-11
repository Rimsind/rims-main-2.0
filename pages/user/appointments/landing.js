import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { useRouter } from "next/router";
import { withAuth } from "helpers/withAuth";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { EprescriptionReport } from "components/reports/Eprescription";
import { AssesmentReport } from "components/reports/AssesmentReport";
import { ExaminationReport } from "components/reports/ExaminationReport";
const Landing = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="My Appointments"
        />

        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <UserNav />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body my-5">
                    <div className="landing-logo text-center mb-4">
                      <Image
                        src="/assets/images/logo-dark.png"
                        height={250}
                        width={250}
                        alt="Rims Logo"
                      />
                    </div>
                    <div className="section-title text-center">
                      <p
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "50px",
                          fontWeight: "600",
                          color: "#15558d",
                        }}
                      >
                        Coming Soon...
                      </p>
                    </div>
                    <div className="section-sub-title text-center">
                      <p
                        style={{
                          fontFamily: "revert",
                          color: "#15558d",
                          fontSize: "30px",
                        }}
                      >
                        Some options are active apart from our policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
