import { BreadCrums } from "components/common";

const Author = () => {
  return (
    <>
      <section className="section-author">
        <BreadCrums title="Home / Blog / Author Name" title1="Author Name" />
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <div className="left-author-profile">
                <div className="left-author-profile-inner">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div
                      className="author-profile-inner"
                      style={{
                        backgroundImage: "url(/assets/images/main.jpg)",
                        height: "180px",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="row">
                        <div className="col-6">
                          <p>Hello</p>
                        </div>
                        <div className="col-6">
                          <p>Hello</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
