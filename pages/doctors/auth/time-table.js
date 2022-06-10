import { BreadCrums } from "components/common";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { DoctorSidebar, TimeTableAccordian } from "components/DoctorComponents";
import { withAuth } from "helpers/withAuth";
import Link from "next/link";

const DoctorTimeTable = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  return (
    <>
      <section className="section-doc-tm-tbl">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Doctor / Doctor Time-Table"
            title1="Doctor Time Table"
          />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <DoctorSidebar status5="active" data={data} />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-header ">
                      <div className="row">
                        <div className="col-9">
                          <h1>Time Table</h1>
                        </div>
                        <div className="col-3 text-end">
                          <button className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="doc-time-table">
                        <div className="accordion" id="accordionExample">
                          {data?.timeTable?.map((items, index) => (
                            <TimeTableAccordian
                              data={items}
                              key={index}
                              indexValue={index}
                              collaps={`collaps${index + 1}`}
                              heading={`heading${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="d-grid gap-2">
                        <Link href="/doctors/auth/time-table-form">
                          <a className="btn btn-primary fs-6 px-5 shadow-sm">
                            <i className="fas fa-plus me-2"></i>Add New Entry
                          </a>
                        </Link>
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

export default withAuth(DoctorTimeTable);
