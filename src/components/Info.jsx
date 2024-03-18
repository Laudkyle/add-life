import React from "react";
import {
  AiFillQuestionCircle,
  AiFillHeart,
  AiFillPlusCircle,
} from "react-icons/ai";
const Info = () => {
  return (
    <div className="text-white w-full h-screen bg-[#8e24aa] py-10 group">
      <div className="text-center">
        <h1 className="text-4xl leading-normal mx-auto mb-12">
          Information & Support
        </h1>
        <div className="flex justify-center items-center max-w-5xl mx-auto gap-8">
          <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa]">
            <AiFillQuestionCircle size={60} color="#8e24aa" />
            <h2 className="flex justify-start px-1 text-2xl ">
              Searching for answers ?
            </h2>
            <p className="flex justify-start px-1 text-[#555]">
              Ignorance can be deadly.
            </p>
            <p className="flex justify-start px-1 mb-12 text-[#555]">
              Start looking here
            </p>
            <div className="text-center py-2  text-white bg-[#8e24aa] mx-auto rounded-full">
              <button>About Cancer</button>
            </div>
          </div>
          <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa]">
            <AiFillQuestionCircle size={60} color="#8e24aa" />
            <h2 className="flex justify-start px-1 text-2xl ">
              Searching for answers ?
            </h2>
            <p className="flex justify-start px-1 text-[#555]">
              Ignorance can be deadly.
            </p>
            <p className="flex justify-start px-1 mb-12 text-[#555]">
              Start looking here
            </p>
            <div className="text-center py-2  text-white bg-[#8e24aa] mx-auto rounded-full">
              <button>About Cancer</button>
            </div>
          </div>
          <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa]">
            <AiFillQuestionCircle size={60} color="#8e24aa" />
            <h2 className="flex justify-start px-1 text-2xl ">
              Searching for answers ?
            </h2>
            <p className="flex justify-start px-1 text-[#555]">
              Ignorance can be deadly.
            </p>
            <p className="flex justify-start px-1 mb-12 text-[#555]">
              Start looking here
            </p>
            <div className="text-center py-2  text-white bg-[#8e24aa] mx-auto rounded-full">
              <button>About Cancer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
