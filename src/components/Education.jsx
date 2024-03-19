import React from "react";

const Education = () => {
  return (
    <div className="w-full h-3/4 py-16 bg-white text-[#5c007a] px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 text-[#4c1c5c]">
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
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              className="w-full flex p-3 rounded-md text-[#333]"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="bg-[#8e24aa] w-48 py-2 ml-4 my-6 rounded-md text-white font-medium">
              Notify Me
            </button>
          </div>
          <p>
            We care about the your health. Read our{" "}
            <span className="text-[#8e24aa]">Privacy Policy</span>.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
