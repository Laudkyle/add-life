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
            <div className="flex flex-col w-[300px] border-2 rounded-md bg-[#ffe7fc] overflow-hidden">
              <div className="my-2 w-full h-full">
                <img
                  src={Betty}
                  alt="betty"
                  className="w-full h-full rounded-full mx-auto"
                />
              </div>
              <div className="m-2">
                <p className="md:text-xl text-[1rem] md:text-center text-justify">
                  Patients need someone to hope and support them emotionally. No
                  one fights cancer alone. If you want to fight this fight, I
                  will fight with you!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonies;
