import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95  text-sm "
      >
        Return to home page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95  text-sm "
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 text-sm "
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
