import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
const NursingHomeId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/nursing-homes/${id}`, fetcher);
  console.log(data);

  return (
    <>
      <main className="main">
        <BreadCrums
          title="Home / Nursing-Home Details"
          title1="Nursing-Home Details"
        />
        {data ? (
          <>
            {
              <>
                <div className="hospital_details_nav">
                  <div className="bg-dark text-light">
                    <ul className="list-unstyled d-flex justify-content-center align-items-center pt-4 pb-4 mb-0">
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#">
                          About Us
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#">
                          Why Choose Us
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#">
                          Facilities
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#">
                          Doctors
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#">
                          We Offer
                        </a>
                      </li>
                      <li className="me-2">
                        <a className="fs-6 text-light" href="#">
                          Visit Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hospital-details-main">
                  <Image
                    alt="Hospital Banner"
                    src="/user_assets/img/slider/slider-4.jpg"
                    width="2000"
                    height="600"
                  />
                </div>
              </>
            }
          </>
        ) : (
          <>
            <DetailsPageLoader />
          </>
        )}
      </main>
    </>
  );
};

export default NursingHomeId;
