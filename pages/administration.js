import Image from "next/image";
import Link from "next/link";
const Administration = () => {
  return (
    <>
      <main>
        <div className="admin_page">
          <div className="container">
            {/* <div className="admin_page_logo">
              <Image
                height="170"
                width="200"
                src="/assets/images/logo-dark.png"
                alt=""
              />
            </div> */}

            <div className="card_list">
              <div className="card-inner">
                <div className="card-item shadow bg-primary p-4 rounded-3">
                  <div className="card-item-inner d-flex align-items-center">
                    <div className="card-inner-icon">
                      <i className="fas fa-user-md fs-1 border rounded-circle p-3 text-light bg-primary"></i>
                    </div>
                    <div className="card-inner-con ms-3">
                      <Link href="#">
                        <a className="fs-5 text-light">Doctor Login</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-inner">
                <div className="card-item shadow bg-primary p-4 rounded-3">
                  <div className="card-item-inner d-flex align-items-center">
                    <div className="card-inner-icon">
                      <i className="fas fa-capsules fs-1 border rounded-circle p-3 text-light bg-primary"></i>
                    </div>
                    <div className="card-inner-con ms-3">
                      <Link href="/polyclinics/login">
                        <a className="fs-5 text-light">Polyclinic Login</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-inner">
                <a>
                  <div className="card-item shadow bg-primary p-4 rounded-3">
                    <div className="card-item-inner d-flex align-items-center">
                      <div className="card-inner-icon">
                        <i className="fas fa-hospital fs-1 border rounded-circle p-3 text-light bg-primary"></i>
                      </div>
                      <div className="card-inner-con ms-3">
                        <Link href="/nursing-homes/login">
                          <a className="fs-5 text-light">Nursing Home Login</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* <div className="back_to_home text-center">
              <button
                type="button"
                className="btn btn-success ps-5 pe-5 pt-3 pb-3"
              >
                Back To Home
              </button>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Administration;
