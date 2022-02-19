import { BreadCrums } from "components/common/index";
import UserNav from "components/UserComponents/UserNav";

const AdvanceSettings = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Advance-Settings"
          title1="Advance-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status7="active" />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <p>
                      Do you want to delete the account? Please press below
                      &quot;Delete&quot; button
                    </p>
                    <button type="button" className="btn btn-danger shadow">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdvanceSettings;
