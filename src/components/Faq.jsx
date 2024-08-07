import React from "react";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Faq = () => {
  return (
    <div className="w-full h-screen py-8 bg-[#8e24aa]">
      <div className="font-bold md:text-4xl sm:text-3xl text:2xl text-center mx-auto h-[50px] text-white  uppercase">
        <p>Frequently Asked Questions</p>
      </div>
      <Splide
        options={{
          perPage: 1,
          arrows: false,
          pagination: false,
          drag:"free",
          gap: "12rem",
        }}
        className="block md:hidden pl-24"
      >
         
          <SplideSlide>
            <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute border-2 w-full h-full backface-hidden">
                  <img src={img3} className="h-full w-full" alt="img1" />
                </div>
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                    <h1 className="text-3xl font-semibold ">Misson 3</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-[#8e24aa]">
                  <div className="text-center text-white flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                  <img src={img2} className="h-full w-full" alt="img1" />
                </div>
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[300px] h-[400px] cursor-pointer group perspective bg-transparent">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute border-2 w-full h-full backface-hidden">
                  <img src={img3} className="h-full w-full" alt="img1" />
                </div>
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
      </Splide>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag:"free",
          gap: "12rem",
        }}
        className="hidden md:block px-8"
      >
         
          <SplideSlide>
            <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent py-8">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute border-2 w-full h-full backface-hidden">
                  <img src={img3} className="h-full w-full" alt="img1" />
                </div>
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                    <h1 className="text-3xl font-semibold ">Misson 3</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-[#8e24aa]">
                  <div className="text-center text-white flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                  <img src={img2} className="h-full w-full" alt="img1" />
                </div>
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
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
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[300px] h-[400px] cursor-pointer group perspective bg-transparent">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute border-2 w-full h-full backface-hidden">
                  <img src={img3} className="h-full w-full" alt="img1" />
                </div>
                <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-gray-400">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                    <h1 className="text-3xl font-semibold ">Misson 1</h1>
                    <p className="my-2">Support</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos itaque similique hic aperiam delectus quaerat eius
                      excepturi atque? Accusantium sit nisi dolores dolore,
                      officiis asperiores eos laudantium. Facere modi id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
      </Splide>
    </div>
  );
};

export default Faq;
