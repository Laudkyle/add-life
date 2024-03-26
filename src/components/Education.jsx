import React from "react";
import Back from "../assets/home.jpg";
const Education = () => {
  return (
    <div className="w-full h-3/4 py-16 bg-white text-[#5c007a] px-8">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-2 sm:text-left text-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 text-[#4c1c5c] sm:text-left text-center">
            Support Matters
          </h1>
          <p className="md:text-2xl sm:text-xl text-[#8e24aa]">
            "Patients need someone to hope and support them emotionally. No one
            fights cancer alone. If you want to fight this fight, I will fight
            with you!!!"
          </p>
          <p className="text-[1.2rem] pl-1">Betty Smith Afful</p>
          <p className="text-[1rem] pl-2">- Cancer Survivor</p>
        </div>
        <div className="m-4  h-full w-full">
          <div className="relative">
            <div className=" absolute top-20/3 w-[200px] h-[200px] rounded-[50%] bg-purple-800 z-10 p-5">
              <div className="text-white font-medium text-center text-xl py-2">
                500+
              </div>
              <div className="text-white text-[1.1rem] md:font-medium text-center">
                We have provided over 500 lymphoma health resources to patients
                in need.
              </div>
            </div>
          </div>
          <div className="pl-20">
            <img src={Back} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
