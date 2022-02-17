import {
  BreadCrums,
  LocationFilter,
  HorizontalPolyclinicCard,
} from "components/common/index";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import { ListingPageLoader } from "components/Loaders";
const Index = () => {
  const { data } = useSWR(`${apiUrl}/nursing-homes`, fetcher);

  // if (loading) {
  //   return <loading />;
  // }
  // if (error) {
  //   return <LoadingError />;
  // }
  return (
    <>
      <main className="main">
        <BreadCrums
          title="Home / Nursing-Home List"
          title1="Nursing-Home List"
        />
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
                      <HorizontalPolyclinicCard
                        data={items}
                        link="nursing-homes"
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
