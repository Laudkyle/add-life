import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Testimonies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      quote:
        "The support I received here helped me understand my lymphoma diagnosis and gave me hope during the most challenging time of my life.",
      author: "Maria Rodriguez",
      role: "Lymphoma Survivor",
      company: "3 Years in Remission",
      category: "Patient",
      initial: "M",
      bgColor: "from-[#6dd5a1] to-[#5bc28f]",
      textColor: "text-gray-900",
    },
    {
      id: 2,
      quote:
        "The treatment guidance and emotional support provided here was exceptional. They truly care about each patient's journey.",
      author: "Dr. Michael Chen",
      role: "Oncologist",
      company: "City Medical Center",
      category: "Healthcare Provider",
      initial: "D",
      bgColor: "from-white to-gray-50",
      textColor: "text-gray-900",
      isReview: true,
      rating: 5,
      date: "February 15, 2025",
      title: "Exceptional Care",
    },
    {
      id: 3,
      quote:
        "Finding this community gave me strength. The resources and connections I made here were invaluable during my treatment.",
      author: "James Thompson",
      role: "Hodgkin's Lymphoma Patient",
      company: "Currently in Treatment",
      category: "Patient Advocate",
      initial: "J",
      bgColor: "from-blue-500 to-blue-600",
      textColor: "text-white",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardStyle = (index, activeIndex) => {
    const isActive = index === activeIndex;
    const isPrev =
      index === (activeIndex - 1 + testimonials.length) % testimonials.length;
    const isNext = index === (activeIndex + 1) % testimonials.length;

    if (isActive) {
      return {
        transform:
          "rotateY(-5deg) rotateX(2deg) translateZ(80px) translateX(0px)",
        zIndex: 30,
        opacity: 1,
        scale: 1,
      };
    } else if (isPrev) {
      return {
        transform:
          "rotateY(-45deg) rotateX(5deg) translateZ(-20px) translateX(-150px)",
        zIndex: 10,
        opacity: 0.6,
        scale: 0.9,
      };
    } else if (isNext) {
      return {
        transform:
          "rotateY(45deg) rotateX(-5deg) translateZ(-20px) translateX(150px)",
        zIndex: 10,
        opacity: 0.6,
        scale: 0.9,
      };
    } else {
      return {
        transform: "rotateY(90deg) translateZ(-100px)",
        zIndex: 1,
        opacity: 0,
        scale: 0.8,
      };
    }
  };

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 .587l3.668 7.431L24 9.75l-6 5.848 1.417 8.268L12 19.771 4.583 23.866 6 15.598 0 9.75l8.332-1.732z" />
        </svg>
      ));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
         <h1 className='text-[#4c1c5c] md:text-5xl sm:text-4xl text-3xl capitalize text-center my-4 font-bold'>
          Stories of Hope & Healing
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Testimonial Carousel */}
          <div className="relative flex justify-center items-center min-h-[500px]" style={{ perspective: "1200px" }}>
            {testimonials.map((testimonial, index) => {
              const style = getCardStyle(index, activeIndex);
              const isReview = testimonial.isReview;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute bg-gradient-to-br ${testimonial.bgColor} ${testimonial.textColor} rounded-2xl p-8 shadow-2xl w-80 md:w-96 transition-all duration-700 ease-out cursor-pointer hover:scale-105`}
                  style={{
                    transform: style.transform,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                    scale: style.scale,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {isReview ? (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.initial}
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.author}</h3>
                          <p className="text-xs text-gray-500">{testimonial.date}</p>
                        </div>
                      </div>
                      <div className="flex mb-3 text-yellow-500">
                        {renderStars(testimonial.rating)}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {testimonial.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                      <p className="uppercase text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full inline-block">
                        {testimonial.category}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xl font-serif leading-relaxed mb-6">
                        <span
                          className={`text-4xl font-bold mr-2 ${
                            testimonial.textColor === "text-white"
                              ? "text-white/80"
                              : "text-white"
                          }`}
                        >
                          "
                        </span>
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 mt-6">
                        <div
                          className={`w-14 h-14 rounded-full bg-white/20 flex items-center justify-center ${
                            testimonial.textColor === "text-white"
                              ? "text-white"
                              : "text-gray-800"
                          } font-bold text-xl`}
                        >
                          {testimonial.initial}
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.author}</h3>
                          <p
                            className={`text-sm ${
                              testimonial.textColor === "text-white"
                                ? "text-white/80"
                                : "text-gray-600"
                            }`}
                          >
                            {testimonial.role}
                          </p>
                          {testimonial.company && (
                            <p
                              className={`italic text-sm ${
                                testimonial.textColor === "text-white"
                                  ? "text-white/70"
                                  : "text-gray-500"
                              }`}
                            >
                              {testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                      <p
                        className={`uppercase text-xs font-semibold mt-4 px-3 py-1 rounded-full inline-block ${
                          testimonial.textColor === "text-white"
                            ? "text-yellow-300 bg-white/20"
                            : "text-purple-700 bg-white/20"
                        }`}
                      >
                        {testimonial.category}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2: CTA */}
          <div className="flex flex-col items-start text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Need Support?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a patient, caregiver, or healthcare provider, our
              team is here to help you every step of the way. Get personalized
              support, resources, and guidance tailored to your journey.
            </p>
            <button
              onClick={() => navigate("/support")}
              className="px-6 py-3 bg-gradient-to-r from-[#6dd5a1] to-[#5bc28f] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Get Support Now
            </button>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer hover:scale-125 transition-all duration-200 ${
                index === activeIndex
                  ? "bg-[#6dd5a1] scale-125"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
