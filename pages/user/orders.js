import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
const Orders = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums title="Home / Dashboard / Orders" title1="Orders" />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status3="active" />

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Order Id</th>
                                    <th>Pharmacy Name</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Amount</th>
                                    <th>Payment Gateway</th>
                                    <th>Status</th>
                                    <th>Order date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547890
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td className="text-center">2</td>
                                    <td className="text-center">$150</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      11 Nov 2019
                                      <span className="d-block text-info">
                                        10.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547891
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td className="text-center">4</td>
                                    <td className="text-center">$200</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      3 Nov 2019
                                      <span className="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547892
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">$75</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      1 Nov 2019
                                      <span className="d-block text-info">
                                        1.00 PM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547893
                                      </a>
                                    </td>
                                    <td>PharmaMed Medical</td>
                                    <td className="text-center">2</td>
                                    <td className="text-center">$100</td>
                                    <td>Paystack</td>
                                    <td>
                                      <span className="badge badge-warning">
                                        Shipped
                                      </span>
                                    </td>
                                    <td>
                                      30 Oct 2019
                                      <span className="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547894
                                      </a>
                                    </td>
                                    <td>PharmaMed Medical</td>
                                    <td className="text-center">5</td>
                                    <td className="text-center">$350</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-warning">
                                        Shipped
                                      </span>
                                    </td>
                                    <td>
                                      28 Oct 2019
                                      <span className="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547895
                                      </a>
                                    </td>
                                    <td>The Pill Club Medical</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">$250</td>
                                    <td>Paypal</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      27 Oct 2019
                                      <span className="d-block text-info">
                                        8.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Orders;
