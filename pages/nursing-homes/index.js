import {
  BreadCrums,
  LocationFilter,
  HorizontalPolyclinicCard,
} from "components/common/index";
const Index = () => {
  return (
    <>
      <main class="main">
        <BreadCrums
          title="Home / Nursing-Home List"
          title1="Nursing-Home List"
        />
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <LocationFilter />
              </div>
              <div class="col-md-12 col-lg-8 col-xl-9">
                <HorizontalPolyclinicCard />
                <HorizontalPolyclinicCard />
                <HorizontalPolyclinicCard />
                <HorizontalPolyclinicCard />

                <div class="load-more text-center mb-4">
                  <a class="btn btn-load btn-sm" href="javascript:void(0);">
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
