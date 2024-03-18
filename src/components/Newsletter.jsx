import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full h-3/4 py-16 bg-white text-[#5c007a] px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
             Want Tips & Tricks to optimize your living?
          </h1>
          <p>Subscrib to our newsletter to stay updated.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input className="w-full flex p-3 rounded-md text-[#333]" type="email" placeholder="Enter your Email" />
            <button className="bg-[#8e24aa] w-48 py-2 ml-4 my-6 rounded-md text-white font-medium">
              Notify Me
            </button>
          </div>
          <p>We care about the your health. Read our <span className="text-[#8e24aa]">Privacy Policy</span>. </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
