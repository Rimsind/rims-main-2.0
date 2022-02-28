import {
  BreadCrums,
  SearchFilter,
  LocationFilter,
  HorizontalDoctorCard,
} from "components/common/index";

import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { ListingPageLoader } from "components/Loaders";

const Index = () => {
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Doctor List" title1="Doctor List" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3">
                <div className="sticky-top">
                  <LocationFilter />
                  <SearchFilter />
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {doctors ? (
                  <>
                    {doctors?.map((item, index) => (
                      <HorizontalDoctorCard doctorData={item} key={index} />
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
