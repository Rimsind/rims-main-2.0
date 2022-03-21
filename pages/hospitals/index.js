import {
  BreadCrums,
  LocationFilter,
  HorizontalPolyclinicCard,
  ListPagination,
} from "components/common/index";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import { ListingPageLoader } from "components/Loaders";
const Index = () => {
  const { data } = useSWR(`${apiUrl}/hospitals`, fetcher);
  return (
    <main className="main">
      <BreadCrums title="Home / Hospital" title1="Hospital" />
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
                      />
                    </form>
                  </div>
                </div>
                <LocationFilter />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              {data ? (
                <>
                  {data?.map((items, index) => (
                    <HorizontalPolyclinicCard
                      data={items}
                      link="hospitals"
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
