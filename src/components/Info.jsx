import React from "react";
import {
  AiFillQuestionCircle,
  AiOutlineHeart,
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
          <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa] text-2xl w-[300px] h-[320px]">
            <AiFillQuestionCircle size={60} color="#8e24aa" />
            <h2 className="text-left text-[1.3rem] ">
              Searching for answers ?
            </h2>
            <p className="text-left text-[#555] text-[1.2rem]">
              Ignorance can be deadly.
            </p>
            <p className="text-left mb-12 text-[#555] text-[1.1rem]">
              Start looking here
            </p>
            <div className="text-center py-2 text-white bg-[#8e24aa] mx-auto rounded-full">
              <button>About Cancer</button>
            </div>
          </div>
          <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa] text-2xl w-[300px] h-[320px]">
            <AiOutlineHeart size={60} color="#44c8f0" />
            <h2 className="text-left text-[1.3rem] ">
              Support the cause
            </h2>
            <p className="text-left text-[#555] text-[1.2rem]">
              Life is precious
            </p>
            <p className="text-left mb-12 text-[#555] text-[1.1rem]">
              Save a life
            </p>
            <div className="text-center py-2 text-white bg-[#8e24aa] mx-auto rounded-full">
              <button>Get Involved</button>
            </div>
          </div>
          <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa] text-2xl w-[300px] h-[320px]">
            <AiFillPlusCircle size={60} color="#57f36b" />
            <h2 className="text-left text-[1.3rem] ">
              Find help now
            </h2>
            <p className="text-left text-[#555] text-[1.2rem]">
              Wanna find help?
            </p>
            <p className="text-left mb-12 text-[#555] text-[1.1rem]">
              Search no more
            </p>
            <div className="text-center py-2 text-white bg-[#8e24aa] mx-auto rounded-full">
              <button>Find support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
