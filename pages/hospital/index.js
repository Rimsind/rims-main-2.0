import {
  BreadCrums,
  LocationFilter,
  HorizontalHospitalCard,
  ListPagination,
} from "components/common/index";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import { ListingPageLoader } from "components/Loaders";
const Index = () => {
  const { data } = useSWR(`${apiUrl}/hospital`, fetcher);
  return (
    <main className="main">
      <BreadCrums title="Home / Hospital" title1="Hospital" />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="sticky-top">
                <LocationFilter />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              {data ? (
                <>
                  {data?.map((items, index) => (
                    <HorizontalHospitalCard
                      data={items}
                      link="hospital"
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
  );
};

export default Index;
