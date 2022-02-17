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

                <div className="load-more text-center mb-4">
                  <a className="btn btn-load btn-sm" href="javascript:void(0);">
                    Load More
                  </a>
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
