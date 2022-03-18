import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const demo = () => {
  const btn1 = () => {
    toast.success("1", {
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
  };
  const btn2 = () => {
    toast.success("2", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };
  return (
    <>
      <button onClick={btn1}>hcfvwvf</button>
      <button onClick={btn2}>gvegvegf</button> <ToastContainer />
    </>
  );
};

export default demo;
