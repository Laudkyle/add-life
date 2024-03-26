import React from "react";
import Betty from "../assets/betty.jpeg";

function Testimonies() {
  return (
    <div className="w-full h-screen bg-white text-[#8e24aa]">
      <div className="max-w-[1240px] h-full mx-auto">
        <h1 className="md:text-5xl sm:text-3xl text-2xl capitalize text-center">
          testimonies
        </h1>
        <div className="grid grid-cols-3 w-full mx-auto">
          <div className="col-span-1 w-full h-full ">
            <div className="flex flex-col w-[280px] h-[450px] border-2 rounded-md bg-[#8e24aa] overflow-hidden]">
              <div className="w-full border-1 bg-[#ffe7fc] rounded-b-[100%]">
                <img
                  src={Betty}
                  alt="betty"
                  className="w-[250px] h-[250px] rounded-full mx-auto my-2"
                />
              </div>
              <div className="bg-[#8e24aa] text-white ">
                <p className="mx-2 md:text-[1.2rem] text-[1rem] md:text-center text-justify">
                  Patients need someone to hope and support them emotionally. No
                  one fights cancer alone. If you want to fight this fight, I
                  will fight with you!!!
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full h-full ">
            <div className="flex flex-col w-[280px] h-[450px] border-2 rounded-md bg-[#8e24aa] overflow-hidden]">
              <div className="w-full border-1 bg-[#ffe7fc] rounded-b-[100%]">
                <img
                  src={Betty}
                  alt="betty"
                  className="w-[250px] h-[250px] rounded-full mx-auto my-2"
                />
              </div>
              <div className="bg-[#8e24aa] text-white ">
                <p className="mx-2 md:text-[1.2rem] text-[1rem] md:text-center text-justify">
                  Patients need someone to hope and support them emotionally. No
                  one fights cancer alone. If you want to fight this fight, I
                  will fight with you!!!
                </p>
              </div>
            </div>
          </div>
updates
        </div>
      </div>
    </div>
  );
}
export default Testimonies;
