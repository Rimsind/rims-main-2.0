import { BreadCrums } from "components/common";
import PathologySideBar from "components/common/PathologySideBar";

const PrivacySettings = () => {
  return (
    <>
      <section className="patho-privacy">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Dashboard / Privacy-Settings"
            title1="Privacy Settings"
          />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <PathologySideBar />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
                          <form>
                            <div className="form-group">
                              <label>Old Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="submit-section">
                              <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                              >
                                Save Changes
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacySettings;
