import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { motion } from "framer-motion";
import { Megaphone, Heart } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      title: "Create Awareness",
      text: "We are dedicated to spreading knowledge and creating awareness so that individuals and communities are informed and empowered.",
      img: img1,
      icon: <Megaphone className="w-10 h-10 text-[#5c007a]" />,
    },
    {
      title: "Offer Support",
      text: "We are here to provide support to everyone who reaches out, ensuring no one goes through challenges alone.",
      img: img2,
      icon: <Heart className="w-10 h-10 text-[#8e24aa]" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#5c007a] uppercase">
        Our Mission
      </h2>

      <div className="space-y-24">
        {missions.map((mission, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image side */}
            <div className="relative w-full md:w-1/2 h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={mission.img}
                alt={mission.title}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {mission.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {mission.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
