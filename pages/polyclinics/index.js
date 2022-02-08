import {
  BreadCrums,
  HorizontalPolyclinicCard,
  LocationFilter,
} from "components/common/index";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
const Index = () => {
  const { data, loading, error } = useSWR(`${apiUrl}/polyclinics`, fetcher);

  // if (loading) {
  //   return <loading />;
  // }
  // if (error) {
  //   return <LoadingError />;
  // }

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Polyclinics List" title1="Polyclinics List" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <LocationFilter />
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {data?.map((items, index) => (
                  <HorizontalPolyclinicCard
                    data={items}
                    link="polyclinics"
                    key={index}
                  />
                ))}

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
