import { BreadCrums, DeleteAccount } from "components/common/index";
import UserNav from "components/UserComponents/UserNav";
import { withAuth } from "helpers/withAuth";

const AdvanceSettings = (data) => {
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
              <UserNav status7="active" patient={data} />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <DeleteAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuth(AdvanceSettings);
