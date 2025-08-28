import React from "react";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Faq = () => {
  return (
    <div className="w-full h-screen py-8 bg-[#8e24aa]">
      <div className="font-bold md:text-4xl sm:text-3xl text-2xl text-center mx-auto h-[50px] text-white uppercase">
        <p>Frequently Asked Questions</p>
      </div>

      {/* Mobile carousel */}
      <Splide
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
          breakpoints: {
            640: {
              perPage: 1,
              gap: "0.5rem",
            },
          },
        }}
        className="block md:hidden px-6"
      >
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img3} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 1</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img3} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 1</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img3} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 1</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img3} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 1</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img3} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 1</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>

        {/* Add your other slides here (same structure) */}
      </Splide>

      {/* Desktop carousel */}
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
          breakpoints: {
            1280: {
              perPage: 3,
              gap: "1.5rem",
            },
            1024: {
              perPage: 2,
              gap: "1rem",
            },
          },
        }}
        className="hidden md:block px-8"
      >
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img1} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 2</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img1} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 2</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img1} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 2</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute border-2 w-full h-full backface-hidden">
                <img src={img1} className="h-full w-full" alt="img1" />
              </div>
              <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                  <h1 className="text-3xl font-semibold">Mission 2</h1>
                  <p className="my-2">Support</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos itaque similique hic aperiam delectus quaerat eius
                    excepturi atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>

        {/* Add your other slides here (same structure) */}
      </Splide>
    </div>
  );
};

export default Faq;
