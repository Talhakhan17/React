// import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between rounded-2xl ">
        <h2 className="bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center  ">
          1
        </h2>
        <div>
          <p className="text-lg mb-10 leading-normal text-white ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            dicta at quo magni quasi nam.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white rounded-full text-lg m-1  px-7 py-3">
              {props.tag}
            </button>
            <button className="bg-blue-500 text-white rounded-full text-lg m-1  px-7 py-3">
              <img src="arrow-left-up-line" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
