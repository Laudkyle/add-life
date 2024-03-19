import React, { useEffect, useState } from "react";
import Heart from "../assets/heart.png";
import Question from "../assets/question mark.png";
import Plus from "../assets/plus.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
const Info = () => {
  const [page, setPage] = useState();

  let size = window.innerWidth;
  useEffect(() => {
    if (size <= 600) {
      setPage(1);
      
    } else if (size <= 900) {
      setPage(2);
    } else {
      setPage(3);
    }
  }, []);
  return (
    <div className="text-white w-full h-screen bg-[#8e24aa] py-10 group">
      <div className="text-center">
        <h1 className="text-4xl leading-normal mx-auto mb-12">
          Information & Support
        </h1>
        <Splide
          className="flex justify items-center max-w-5xl mx-auto gap-8"
          options={{
            perPage: page,
            arrows: false,
            pagination: false,
            gap: "2rem",
          }}
          s
        >
          <SplideSlide>
            <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa] text-2xl w-[300px] h-[320px]">
              <img src={Question} alt="img" className="w-12 h-12" />
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
          </SplideSlide>
          <SplideSlide>
            <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa] text-2xl w-[300px] h-[320px]">
              <img src={Heart} alt="img" className="w-12 h-12" />
              <h2 className="text-left text-[1.3rem] ">Support the cause</h2>
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
          </SplideSlide>
          <SplideSlide>
            <div className="bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-6 rounded-xl text-[#8e24aa] text-2xl w-[300px] h-[320px]">
              <img src={Plus} alt="img" className="w-12 h-12" />
              <h2 className="text-left text-[1.3rem] ">Find help now</h2>
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
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Info;
