import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Book } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero / Intro Section */}
<section
  className="w-full relative h-[45vh] md:h-screen text-white flex items-center justify-center px-6 md:px-20 bg-cover bg-center"
  style={{ backgroundImage: "url('./addlife-about.png')" }}
>
  {/* Animated Overlay */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.9 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 bg-gradient-to-r from-[#6e24aa]/40 to-[#ab47bc]/40"
  ></motion.div>

  {/* Content */}
  <div className="relative z-10 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      About Us
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="max-w-3xl mx-auto text-lg md:text-xl"
    >
      <span className="font-semibold">ADD LIFE TO YEARS Foundation</span>{" "}
      is committed to bringing hope, awareness, and compassionate support
      to individuals and families affected by cancer. We believe no one
      should walk this journey alone.
    </motion.p>

    {/* Optional: Call to Action Button */}
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-10 px-8 py-3 bg-white text-[#6e24aa] font-semibold rounded-full shadow-lg hover:bg-gray-100"
    >
      Learn More
    </motion.button>
  </div>
</section>


      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="hidden md:block text-3xl md:text-4xl font-bold text-[#8e24aa] mb-8"
        >
          Our Story
        </motion.h2>

        {/* Mobile icons instead of text */}
        <div className="flex justify-center gap-6 md:hidden mb-8">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white shadow-md"
          >
            <Book className="w-8 h-8 text-[#8e24aa]" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white shadow-md"
          >
            <Heart className="w-8 h-8 text-[#8e24aa]" />
          </motion.div>
        </div>

        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          ADD LIFE TO YEARS Cancer Foundation was born from a journey of
          resilience and hope. At the heart of our mission are{" "}
          <span className="font-semibold text-[#8e24aa]">
            Betty Smith Afful
          </span>
          , a lymphoma survivor, and her husband{" "}
          <span className="font-semibold text-[#8e24aa]">
            Benjamin Smith Afful
          </span>
          . Together, they lead the foundation with a deep commitment to
          ensuring that no one walks through the cancer journey alone. Their
          story represents the courage, love, and determination that inspire
          everything we do.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-20 text-center">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="hidden md:block text-3xl md:text-4xl font-bold text-[#8e24aa] mb-12"
        >
          Leadership
        </motion.h2>

        {/* Mobile icons instead of text */}
        <div className="flex justify-center gap-6 md:hidden mb-8">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white shadow-md"
          >
            <Users className="w-8 h-8 text-[#8e24aa]" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white shadow-md"
          >
            <Heart className="w-8 h-8 text-[#8e24aa]" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Betty */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <img
              src="/betty.jpeg" // replace with actual photo
              alt="Betty Smith Afful"
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-[#8e24aa] mb-4"
            />
            <h3 className="text-xl font-semibold text-[#8e24aa]">
              Betty Smith Afful
            </h3>
            <p className="text-gray-600">Lymphoma Survivor & Co-Founder</p>
            <p className="mt-4 text-gray-700 text-sm">
              Betty’s journey as a lymphoma survivor fuels her mission to
              inspire, support, and advocate for cancer patients and families.
            </p>
          </motion.div>

          {/* Benjamin */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <img
              src="/benjamin.jpg" // replace with actual photo
              alt="Benjamin Smith Afful"
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-[#8e24aa] mb-4"
            />
            <h3 className="text-xl font-semibold text-[#8e24aa]">
              Benjamin Smith Afful
            </h3>
            <p className="text-gray-600">Co-Founder</p>
            <p className="mt-4 text-gray-700 text-sm">
              Benjamin stands beside Betty as a partner in both life and the
              foundation’s mission, driving initiatives that bring hope and
              lasting impact to the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Call-to-Action */}
      <section className="w-full bg-[#8e24aa] text-white py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Join Us in Making a Difference
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-lg"
        >
          Together, we can create a community of strength, hope, and care for
          everyone affected by cancer.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-[#8e24aa] font-semibold rounded-full shadow-lg"
        >
          Get Involved
        </motion.button>
      </section>
    </div>
  );
};

export default About;
