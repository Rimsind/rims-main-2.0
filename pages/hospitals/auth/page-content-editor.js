import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { HospitalSideBar } from "components/common";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast, Slide } from "react-toastify";
import { withAuth } from "helpers/withAuth";
const PageContentEditor = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/hospitals/${auth?.user?.profileId}`,
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

  const { register, handleSubmit } = useForm();
  const submit_nursing_content = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        total_regular_bed: data.total_regular_bed,
        available_regular_bed: data.available_regular_bed,
        total_icu_bed: data.total_icu_bed,
        available_icu_bed: data.available_icu_bed,
        total_ambulance: data.total_ambulance,
        available_ambulance: data.available_ambulance,
        total_icu_ambulance: data.total_icu_ambulance,
        available_icu_ambulance: data.available_icu_ambulance,
        total_ot: data.total_ot,
        available_ot: data.available_ot,
        total_burn_unit: data.total_burn_unit,
        available_burn_unit: data.available_burn_unit,
        total_doctors: data.total_doctors,
        total_nurse: data.total_nurse,
      };
      const res = await axios.put(
        `${apiUrl}/hospitals/${auth?.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      toast.success("Profile Updated Succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <HospitalSideBar data={data} status8="active" />

            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9 col-xxl-9">
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Overview</p>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(submit_nursing_content)}>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">Regular Bed</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Bed"
                                name="total_regular_bed"
                                {...register("total_regular_bed")}
                                defaultValue={
                                  !!data?.total_regular_bed
                                    ? data.total_regular_bed
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Bed"
                                name="available_regular_bed"
                                {...register("available_regular_bed")}
                                defaultValue={
                                  !!data?.available_regular_bed
                                    ? data.available_regular_bed
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">ICU Bed</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Bed"
                                name="total_icu_bed"
                                {...register("total_icu_bed")}
                                defaultValue={
                                  !!data?.total_icu_bed
                                    ? data.total_icu_bed
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Bed"
                                name="available_icu_bed"
                                {...register("available_icu_bed")}
                                defaultValue={
                                  !!data?.available_icu_bed
                                    ? data.available_icu_bed
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">
                            Regular Ambulance
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Ambulance"
                                name="total_ambulance"
                                {...register("total_ambulance")}
                                defaultValue={
                                  !!data?.total_ambulance
                                    ? data.total_ambulance
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Ambulance"
                                name="available_ambulance"
                                {...register("available_ambulance")}
                                defaultValue={
                                  !!data?.available_ambulance
                                    ? data.available_ambulance
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">ICU Ambulance</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Ambulance"
                                name="total_icu_ambulance"
                                {...register("total_icu_ambulance")}
                                defaultValue={
                                  !!data?.total_icu_ambulance
                                    ? data.total_icu_ambulance
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Ambulance"
                                name="available_icu_ambulance"
                                {...register("available_icu_ambulance")}
                                defaultValue={
                                  !!data?.available_icu_ambulance
                                    ? data.available_icu_ambulance
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">
                            Operation Theater
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total OT</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total OT"
                                name="total_ot"
                                {...register("total_ot")}
                                defaultValue={
                                  !!data?.total_ot ? data.total_ot : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available OT</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available OT"
                                name="available_ot"
                                {...register("available_ot")}
                                defaultValue={
                                  !!data?.available_ot ? data.available_ot : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">Burn Care Unit</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Unit</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Unit"
                                name="total_burn_unit"
                                {...register("total_burn_unit")}
                                defaultValue={
                                  !!data?.total_burn_unit
                                    ? data.total_burn_unit
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Unit</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Unit"
                                name="available_burn_unit"
                                {...register("available_burn_unit")}
                                defaultValue={
                                  !!data?.available_burn_unit
                                    ? data.available_burn_unit
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">Doctors</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Doctors</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Unit"
                                name="total_doctors"
                                {...register("total_doctors")}
                                defaultValue={
                                  !!data?.total_doctors
                                    ? data.total_doctors
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        {" "}
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Nurse</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Unit"
                                name="total_nurse"
                                {...register("total_nurse")}
                                defaultValue={
                                  !!data?.total_nurse ? data.total_nurse : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="save-btn-poly mt-4 text-end">
                        <button className="btn btn-primary" type="submit">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(PageContentEditor);
